import React, { Component } from 'react';
import { Treebeard } from 'react-treebeard';
import Parse from 'parse';

export default class DocTreebreard extends Component {

    constructor(props) {
        super(props);

        this.onToggle = this.onToggle.bind(this);
    }


    async componentDidMount() {
        const folder = Parse.Object.extend('folder');
        let query = new Parse.Query(folder);
        let results = await query.find().then((results) => {
            return results
        });
        this.setState({
            data: results
        })
        console.log("After read folder api")
        console.log(this.state.data)
        alert(this.state.data)
    }


    onToggle(node, toggled) {
        console.log(node);
        const { cursor, data } = this.state;
        if (cursor) {
            this.setState(() => ({ cursor, active: false }));
        }
        node.active = true;
        if (node.children) {
            node.toggled = toggled;
        }
        this.setState(() => ({ cursor: node, data: Object.assign({}, data) }));
    }


    render() {
        console.log("Inside render")
        //  console.log(this.state.results)

    
        let { data } = this.state;
        // console.log(this.state.data)
        // let data = {
        //     name: "ראשי",
        //     toggled: true,
        //     children: []
        // }
        return <div>hhhh</div>;

        // const { data } = this.state;
        // console.log("kdlskdlsdk")
        // for (let i = 0; i < data4menu.length; i++){
        //     console.log(data4menu.get("name") + " " + data4menu.get("parent") + " " + data4menu.id )
        // }

        // return (
        //     <Treebeard
        //         data={data}
        //         onToggle={this.onToggle}
        //     />
        // )
    }
}