import React , { Component } from 'react'
import Table from './Table'
class App extends Component {

render(){ 

const employees = [
{name: "Faith", role=" developer", salary:120000},
{name: "Tunde", role=" HR", salary:100000},
{name: "Blessing", role=" R & D", salary:200000},
{name: "Josh", role=" Developer", salary: 500000},
{name: "David", role=" Business Developer", salary: 600000},
{name: "Dumebi", role=" Manager", salary: 7203839},
{name: "Igbekele", role=" Group MD", salary: 1200000}
]
}

return (
<div className="container">
  <Table employeeData={employees} />
</div>

)

}

}

export default App
