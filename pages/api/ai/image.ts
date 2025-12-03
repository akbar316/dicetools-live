import { generateImage } from "@/lib/gemini";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const { prompt, aspectRatio } = req.body;

    if (!prompt) {
        return res.status(400).json({ message: 'Prompt is required' });
    }

    try {
        const image = await generateImage(prompt, aspectRatio);
        if (image) {
            res.status(200).json({ image });
        } else {
            res.status(500).json({ message: 'Failed to generate image' });
        }
    } catch (error: any) {
        res.status(500).json({ message: error.message || 'Internal Server Error' });
    }
}
