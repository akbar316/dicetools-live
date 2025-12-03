import { GoogleGenAI } from "@google/genai";

const getAIClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("API Key is missing. Please set process.env.API_KEY.");
  }
  return new GoogleGenAI({ apiKey });
};

// Helper function to convert base64 to a FilePart
function fileToGenerativePart(base64: string, mimeType: string) {
    return {
      inlineData: {
        data: base64,
        mimeType
      },
    };
  }

export const generateText = async (prompt: string, systemInstruction?: string): Promise<string> => {
  try {
    const ai = getAIClient();
    const model = ai.getGenerativeModel({ model: "gemini-1.5-flash", systemInstruction });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Gemini Text Error:", error);
    throw new Error("Failed to generate text. Please try again.");
  }
};

export const generateImage = async (prompt: string, aspectRatio: string = "1:1"): Promise<string | null> => {
  try {
    const ai = getAIClient();
    const model = ai.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const parts = response.candidates?.[0]?.content?.parts;
    if (parts) {
      for (const part of parts) {
        if (part.inlineData) {
          const resMimeType = part.inlineData.mimeType || 'image/png';
          const resData = part.inlineData.data;
          return `data:${resMimeType};base64,${resData}`;
        }
      }
    }
    return null;

  } catch (error) {
     console.error("Gemini Image Generation Error:", error);
     throw new Error("Failed to generate image.");
  }
};

export const editImage = async (imageFileBase64: string, prompt: string, aspectRatio: string = "1:1"): Promise<string | null> => {
  try {
    const ai = getAIClient();
    const model = ai.getGenerativeModel({ model: "gemini-1.5-flash" });

    const matches = imageFileBase64.match(/^data:(.+);base64,(.+)$/);
    if (!matches) {
        throw new Error("Invalid image data");
    }
    const mimeType = matches[1];
    const data = matches[2];

    const imagePart = fileToGenerativePart(data, mimeType);

    const result = await model.generateContent([prompt, imagePart]);
    const response = await result.response;
    const parts = response.candidates?.[0]?.content?.parts;
    if (parts) {
      for (const part of parts) {
        if (part.inlineData) {
          const resMimeType = part.inlineData.mimeType || 'image/png';
          const resData = part.inlineData.data;
          return `data:${resMimeType};base64,${resData}`;
        }
      }
    }
    return null;

  } catch (error) {
     console.error("Gemini Image Edit Error:", error);
     throw new Error("Failed to edit image.");
  }
};

export const processPdf = async (pdfBase64: string): Promise<string> => {
    try {
        const ai = getAIClient();
        const model = ai.getGenerativeModel({ model: "gemini-1.5-flash" });

        const matches = pdfBase64.match(/^data:(.+);base64,(.+)$/);
        if (!matches) {
            throw new Error("Invalid file data");
        }
        const mimeType = matches[1];
        const data = matches[2];
        const finalMime = mimeType === 'application/octet-stream' ? 'application/pdf' : mimeType;
        
        const pdfPart = fileToGenerativePart(data, finalMime);
        const prompt = "Extract all content from this PDF and format it as clean HTML. Preserve headings, paragraphs, lists, and tables. Do not include markdown code blocks, just return raw HTML.";

        const result = await model.generateContent([prompt, pdfPart]);
        const response = await result.response;
        let text = response.text();
        text = text.replace(/```html/g, '').replace(/```/g, '');
        return text;

    } catch (error) {
        console.error("Gemini PDF Error:", error);
        throw new Error("Failed to process PDF.");
    }
};
