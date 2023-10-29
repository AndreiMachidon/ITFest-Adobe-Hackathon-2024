import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: "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",
});

export function Leaderboard() {

}

export async function CalculateXP(list: string) {
    const prompt: string = "You have to generate a score that indicates the amount of generousity you can identify in the following donation: " + list + ". Give it a score from 1 to 10 in JSON format: ";
    openai.chat.completions.create({
        messages: [{ role: "user", content: prompt }],
        model: "gpt-3.5-turbo",
    })
    .then((completion) => {
        console.log(completion.choices[0].message);
    })
}

function elongatedSigmoid(x: number): number {
    const steepness = 2;
    const shift = 0.5;
  
    return 1 / (1 + Math.exp(-steepness * (x - shift)));
}
  
export function GenerateColor(percentage: number): string {
    if (percentage < 0 || percentage > 1) {
        throw new Error("Percentage must be between 0 and 1");
    }

    const red = Math.floor(255 * percentage);
    const green = Math.floor(255 * (1 - percentage));
    const blue = 0;

    const colorHex = `#${(red << 16 | green << 8 | blue).toString(16).padStart(6, '0')}`;

    return colorHex;
}

export function ExtractScore(apiResponse: string): number | null {
    const scoreRegex = /"score"\s*:\s*([\d.]+)/;
    const match = apiResponse.match(scoreRegex);
  
    if (match) {
      const score = parseFloat(match[1]);
      return !isNaN(score) ? score : null;
    }
  
    return null;
  }