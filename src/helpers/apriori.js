export const apriori = async (data) => {
    const formData = new FormData()
    formData.append("file", data.formFile[0])

    const res = await fetch("http://localhost:5000/apriori", {
         method: "POST",
         body: formData
     }).then(res => res.json())
     
     console.log("Hol")
     console.log(res)
     return res;
}