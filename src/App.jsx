import { useState } from "react";
import "./App.css";
console.log(import.meta.env.VITE_REACT_APP_REPLICATE_API_TOKEN);

// import Replicate from "replicate";

// const replicate = new Replicate({
//   auth: import.meta.env.VITE_REACT_APP_REPLICATE_API_TOKEN,
// });

// console.log(import.meta.env.VITE_REACT_APP_REPLICATE_API_TOKEN);

// const output = await replicate.run(
//   "meta/musicgen:7be0f12c54a8d033a0fbd14418c9af98962da9a86f5ff7811f9b3423a1f0b7d7",
//   {
//     input: {
//       top_k: 250,
//       top_p: 0,
//       prompt:
//         "Edo25 major g melodies that sound triumphant and cinematic. Leading up to a crescendo that resolves in a 9th harmonic",
//       duration: 33,
//       temperature: 1,
//       continuation: false,
//       model_version: "stereo-large",
//       output_format: "wav",
//       continuation_start: 0,
//       multi_band_diffusion: false,
//       normalization_strategy: "peak",
//       classifier_free_guidance: 3,
//     },
//   }
// );
// console.log(output);

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="" style={{ minHeight: "100%", backgroundColor: "red" }}>
        Click on the Vite and React logos to learn more
      </div>
    </>
  );
}

export default App;
