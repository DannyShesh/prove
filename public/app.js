
function displayData(item) {
item.map(n => console.log(n))
document.querySelector("#parent").innerHTML = `
<table>
    <tr>
        <th>
             Title
        </th>

        <th>
       Age Rating
        </th>

        <th>
        Genres
        </th>
        <th>
        Date
        </th>

    </tr>
    ${item.map (n => {
    const tr = document.createElement("tr")
    tr.innerHTML += `<td>${n.title} </td>
    <td>${n.id} </td>
    <td>${n.rating} </td>
    <td>${n.age} </td>
    <td>${n.genres}</td>
    <td>${n.releaseDate} </td>`
    document.body.appendChild(tr)
    })}
    </table>    

`
}

fetcher()

function fetcher(){
    fetch('/api/movies')
  .then((response) => response.json())
  .then((data) => displayData(data));
  

}

