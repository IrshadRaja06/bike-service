import React from 'react'

const contact = (props) => {
  return (
    <div>
        <div class="position-absolute top-50 start-50">
      <table> 
        <tr>
            <th colspan={2}>Contact Members</th>
        </tr>
        <tr>
            <th>Phone no</th>
            <th>Name</th>
        </tr>
        <tr>
            <td>{props.tel}</td>
            <td>{props.name}</td>
        </tr>
        <tr>
            <td>999072401</td>
            <td>kamal</td>
        </tr>
        <tr>
            <td>999072401</td>
            <td>kamal</td>
        </tr>
      </table>
      </div>
    </div>
  )
}


export default contact
