export const uploadFile = async (data) => {
    const formData = new FormData()
    formData.append("file", data.formFile[0])

    const res = await fetch("http://localhost:5000/uploadFile", {
         method: "POST",
         body: formData
     }).then(res => res.json())
     return res;
}