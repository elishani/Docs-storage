import React, { Component } from 'react';
import { Treebeard } from 'react-treebeard';
import Parse from 'parse';
import  MenuModel  from '../model/MenuModel'
export default class DocTreebreard extends Component {

    constructor(props) {
        super(props);

        //this.state = {dataMenu:[]}
        this.state = {menu:[]}
        this.onToggle = this.onToggle.bind(this);
    }


    async componentDidMount() {
        const folder = Parse.Object.extend('folder');
        const query = new Parse.Query(folder);
        const results = await query.find()
        const menu = results.map(parseMenu => new MenuModel(parseMenu))
        this.setState({ menu})
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
        const { menu } = this.state
        console.log(menu)

        console.log(this.state)
        let data = {
            name: "ראשי",
            toggled: true,
            children: []
        }
       
        return (
            <Treebeard
                data={data}
                onToggle={this.onToggle}
            />
        )
    }
}