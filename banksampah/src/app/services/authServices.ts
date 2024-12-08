// export const loginRequest = async (
//     payload: Record<string, any>
//   ): Promise<any> => {
//     try {
//       const response = await fetch(
//         "https://script.google.com/macros/s/AKfycbwzX3I94YnPvtEHuGB7rfbxZRBtTXJVlo_73qMeRTPc6URZB-gRa8x7dfmJy03_RXZ5hw/exec?login=loginSession",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "text/plain; charset=utf-8",
//           },
//           body: JSON.stringify(payload),
//         }
//       );
  
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
  
//       const data = await response.json();
//       return data;
//     } catch (error) {
//       console.error("There was a problem with the login request:", error);
//       throw error;
//     }
//   };