// diem trung binh
const tinhDiemTrungBinh = (id, ...param) => {
  let html = 0;
  for (let value of param) {
    html += +value;
  }

  document.getElementById(id).innerHTML = (html / param.length).toFixed(2);
};

//btn Khoi1
document.querySelector("#btnKhoi1").onclick = () => {
  const toan = document.querySelector("#inpToan").value;
  const li = document.querySelector("#inpLy").value;
  const hoa = document.querySelector("#inpHoa").value;

  tinhDiemTrungBinh("tbKhoi1", toan, li, hoa);
};

//btn Khoi2
document.querySelector("#btnKhoi2").onclick = () => {
  const van = document.querySelector("#inpVan").value;
  const su = document.querySelector("#inpSu").value;
  const dia = document.querySelector("#inpDia").value;
  const english = document.querySelector("#inpEnglish").value;

  tinhDiemTrungBinh("tbKhoi2", van, su, dia, english);
};
