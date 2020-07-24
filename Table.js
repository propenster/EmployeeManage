import React, {Component} from 'react'
class Table extends Component{
const TableHeader = ()=> {
<thead>
<th>Name</th>
<th>Role</th>
<th>Salary</th>
</thead>
}
const TableBody = (props)=>{
const rows = props.employeeData.map((row, index)=>{
return(
<tr key={index}>
<td>{row.name}</td>
<td>{row.role}</td>
<td>{row.salary}</td>
</tr>

)
}
return <tbody>{rows}</tbody>
}

render(){
const {employeeData} = this.props
return(
<table>
<TableHeader />
<TableBody employeeData={employeeData} />
</table>


)
}

}
export default Table
