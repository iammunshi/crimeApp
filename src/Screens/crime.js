import React from 'react';


export default class crime extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            categoryy: [],
            forces: [],
            list:[]
        }
        this.getSelectedCat = this.getSelectedCat.bind(this);
        this.getSelectedForce = this.getSelectedForce.bind(this);
        this.formSubmitted = this.formSubmitted.bind(this);
    }
    componentDidMount() {
        var cat, forc;
        this.props.category()
        .then(res => {
            cat = res;
            console.log("catttt>>>", cat)
            this.setState({
                categoryy: cat
            })
        })
        .catch(e => {
            console.log(e)
            return { categoryy: "Masla Khara hogaya" };
        })
        this.props.force()
        .then(res => {
            forc = res;
            this.setState({
                forces: forc
            })
        })
        .catch(e => {
            console.log(e)
            return { categoryy: "Masla Khara hogaya" };
        })
    }
    getSelectedCat(e){
        console.log(e.target.value)
        this.setState({
            selectedCategory: e.target.value
        })
    }
    getSelectedForce(e){
        console.log(e.target.value)
        this.setState({
            selectedForce: e.target.value
        })
    }
    formSubmitted(e){
        e.preventDefault();
        const {selectedCategory, selectedForce} = this.state;
        this.props.crime(selectedCategory, selectedForce)
        .then(res => {
            console.log("Crime>>>", res)
            this.setState({
                list: res
            })
        })
        .catch(e => {
            console.log(e)
        })
    }
    render() {
        console.log("StateWala==>>>", this.state.categoryy)
        const { categoryy, forces, list } = this.state;
        return (
            <div className="container">
                <form onSubmit={this.formSubmitted}>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputState">Crime Category</label>
                            <select onChange={this.getSelectedCat} id="inputState" className="form-control">
                                <option selected disabled>-- Select --</option>
                                {categoryy.map((elem, index) => {
                                    return <option key={index} value={elem.url}>{elem.name}</option>
                                })}
                            </select>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputState">Force</label>
                            <select onChange={this.getSelectedForce} id="inputState2" className="form-control">
                                <option selected disabled>-- Select --</option>
                                {forces.map((elem, index) => {
                                    return <option key={index} value={elem.id}>{elem.name}</option>
                                })}
                            </select>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary pull-right">Search</button>
                </form>
                <hr/>
                <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Category</th>
                        <th scope="col">Month</th>
                        <th scope="col">Outcome</th>
                        </tr>
                    </thead>
                    <tbody>
                    {list.length == 0 &&
                <tr>
                  <td colSpan="8">
                  No Records
                  </td>
                </tr>}
            {
              list.map((item, index)=>{
              return (
                
                  <tr key={Math.random() * item.id}>
                    <td>{item.id}</td>
                    <td>{item.category}</td>
                    <td>{item.month}</td>
                    <td>{item.outcome_status.category}</td>
                  </tr>
              )
            })
            }
                    </tbody>
                    </table>
            </div>
        );
    }
}   
