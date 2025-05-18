export const iniciarDatos = (dataPago) => {
  if (Data) {
    Data.init(dataPago);
  }
};

export const reload = (data) => {
  if (Data) {
    Data.reload(data);
  }
};

export { iniciarDatos, reload };
