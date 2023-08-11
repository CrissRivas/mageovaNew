const url = "https://db.mageova.mx/";

export function makeIntento(data) {
  fetch(url + "sql/intento", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
// 1
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
export function makeImpacto(data) {
  console.log(data);
  fetch(url + "sql/impacto", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
// 2
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
export function makeIntentoMongo(data) {
  fetch(url + "impact/try", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  
}
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
// 3
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //

export function makeImpactoMongo(data) {
  fetch(url + "impact/impact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  
}

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
// 4
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //

export function makeResponse(data) {
  fetch(url +'impact/responses', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  
}
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
// 5
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
