import { GoogleGenAI } from "@google/genai";

const getAIClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("API Key is missing. Please set process.env.API_KEY.");
  }
  return new GoogleGenAI({ apiKey });
};

export const generateText = async (prompt: string, systemInstruction?: string): Promise<string> => {
  try {
    const ai = getAIClient();
    const modelId = "gemini-2.5-flash"; 
    
    const response = await ai.models.generateContent({
      model: modelId,
      contents: prompt,
      config: {
        systemInstruction: systemInstruction,
      },
    });

    return response.text || "No response generated.";
  } catch (error) {
    console.error("Gemini Text Error:", error);
    throw new Error("Failed to generate text. Please try again.");
  }
};

export const generateImage = async (prompt: string, aspectRatio: string = "1:1"): Promise<string | null> => {
  try {
    const ai = getAIClient();
    const modelId = "gemini-2.5-flash-image"; 
    
    const response = await ai.models.generateContent({
      model: modelId,
      contents: prompt,
      config: {
        imageConfig: {
          aspectRatio: aspectRatio
        }
      }
    });

    const parts = response.candidates?.[0]?.content?.parts;
    if (parts) {
      for (const part of parts) {
        if (part.inlineData) {
          const base64Data = part.inlineData.data;
          const mimeType = part.inlineData.mimeType || 'image/png';
          return `data:${mimeType};base64,${base64Data}`;
        }
      }
    }
    return null;
  } catch (error) {
    console.error("Gemini Image Error:", error);
    throw new Error("Failed to generate image.");
  }
};

export const editImage = async (imageFileBase64: string, prompt: string, aspectRatio: string = "1:1"): Promise<string | null> => {
  try {
    const ai = getAIClient();
    const modelId = "gemini-2.5-flash-image";
    
    const matches = imageFileBase64.match(/^data:(.+);base64,(.+)$/);
    if (!matches) {
        throw new Error("Invalid image data");
    }
    const mimeType = matches[1];
    const data = matches[2];

    const response = await ai.models.generateContent({
      model: modelId,
      contents: {
        parts: [
          {
            inlineData: {
              mimeType: mimeType,
              data: data,
            },
          },
          {
            text: prompt,
          },
        ],
      },
      config: {
        imageConfig: {
          aspectRatio: aspectRatio
        }
      }
    });

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
        const modelId = "gemini-2.5-flash"; 

        const matches = pdfBase64.match(/^data:(.+);base64,(.+)$/);
        if (!matches) {
            throw new Error("Invalid file data");
        }
        const mimeType = matches[1];
        const data = matches[2];
        const finalMime = mimeType === 'application/octet-stream' ? 'application/pdf' : mimeType;

        const response = await ai.models.generateContent({
            model: modelId,
            contents: {
                parts: [
                    {
                        inlineData: {
                            mimeType: finalMime,
                            data: data
                        }
                    },
                    {
                        text: "Extract all content from this PDF and format it as clean HTML. Preserve headings, paragraphs, lists, and tables. Do not include markdown code blocks, just return raw HTML."
                    }
                ]
            }
        });

        let text = response.text || "";
        text = text.replace(/```html/g, '').replace(/```/g, '');
        return text;

    } catch (error) {
        console.error("Gemini PDF Error:", error);
        throw new Error("Failed to process PDF.");
    }
}