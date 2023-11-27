import Replicate from "replicate";
const lyrics = `In the silence of the night, whispers roam,
Stars above, weaving tales of their own,
Time surrenders to this endless sky,
Where dreams and wishes learn to fly.

Echoes of laughter in the gentle breeze,
A melody lingers, caught in memories,
In the dance of shadows, secrets confide,
A symphony of moments, forever tied.

With every heartbeat, a story's told,
Embraced by echoes, both young and old,
Through highs and lows, the rhythm remains,
A timeless tune that forever sustains.

Footprints in sand, a silent trace,
Capturing echoes of love's embrace,
In every verse, a life unfolds,
Through lyrics written, and stories untold.

Whispers carried by the winds afar,
Mingling echoes, like a shining star,
In the tapestry of life, a lyric's rhyme,
A chorus of moments frozen in time.`;

const replicate = new Replicate({
  auth: "r8_09ZYxMb1KYTjFyKUgb2VsV5V6XpO4QR1QE3ml",
});

const output = await replicate.run(
  "meta/musicgen:7be0f12c54a8d033a0fbd14418c9af98962da9a86f5ff7811f9b3423a1f0b7d7",
  {
    input: {
      prompt: lyrics,
      melody_file: "melody.mp3",
      style_prompt: "pop",
      duration: 60,
    },
  }
);
console.log(output);

console.log(output);

// ['https://replicate.com/api/models/stability-ai/stable-diffusion/files/50fcac81-865d-499e-81ac-49de0cb79264/out-0.png']
