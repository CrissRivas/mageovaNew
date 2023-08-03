export function makeIntento(data) {
  const xhr = new XMLHttpRequest();
  xhr.open(
    "POST",
    "http://ec2-18-222-233-2.us-east-2.compute.amazonaws.com:3000/sql/intento",
    true
  );
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        console.log("Respuesta de la petición:", xhr.responseText);
      } else {
        console.error("Error al realizar la petición:", xhr.status);
      }
    }
  };
  xhr.send(JSON.stringify(data));
}
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
// 1
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // 
export function makeImpacto(data) {
    const xhr = new XMLHttpRequest();
    xhr.open(
      "POST",
      "http://ec2-18-222-233-2.us-east-2.compute.amazonaws.com:3000/sql/impacto",
      true
    );
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log("Respuesta de la petición:", xhr.responseText);
        } else {
          console.error("Error al realizar la petición:", xhr.status);
        }
      }
    };
    xhr.send(JSON.stringify(data));
  }
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
// 2
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
  export function makeIntentoMongo(data) {
    const xhr = new XMLHttpRequest();
    xhr.open(
      "POST",
      "http://ec2-18-222-233-2.us-east-2.compute.amazonaws.com:3000/impact/try",
      true
    );
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log("Respuesta de la petición:", xhr.responseText);
        } else {
          console.error("Error al realizar la petición:", xhr.status);
        }
      }
    };
    xhr.send(JSON.stringify(data));
  }
  // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
// 3
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
  
  export function makeImpactoMongo(data) {
      const xhr = new XMLHttpRequest();
      xhr.open(
        "POST",
        "http://ec2-18-222-233-2.us-east-2.compute.amazonaws.com:3000/impact/impact",
        true
      );
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            console.log("Respuesta de la petición:", xhr.responseText);
          } else {
            console.error("Error al realizar la petición:", xhr.status);
          }
        }
      };
      xhr.send(JSON.stringify(data));
    }

    // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
// 4
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
  
    export function makeResponse(data) {
        const xhr = new XMLHttpRequest();
        xhr.open(
          "POST",
          "http://ec2-18-222-233-2.us-east-2.compute.amazonaws.com:3000/impact/responses",
          true
        );
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onreadystatechange = () => {
          if (xhr.readyState === 4) {
            if (xhr.status === 200) {
              console.log("Respuesta de la petición:", xhr.responseText);
            } else {
              console.error("Error al realizar la petición:", xhr.status);
            }
          }
        };
        xhr.send(JSON.stringify(data));
      }
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
// 5
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //