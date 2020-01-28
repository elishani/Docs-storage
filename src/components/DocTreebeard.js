import React, { Component } from 'react';
import { Treebeard } from 'react-treebeard';

const data = {
    name: 'root',
    toggled: true,
    children: [
        {
            name: 'רכב',
            children: [
                { name: 'ביטוח' },
                { name: 'טיפולים' }
            ]
        },
        {
            name: 'בית',
            children: [
                { name: 'ביטוח' },
                { name: 'טיפולים' }
            ]
        }
    ]
}

export default class DocTreebreard extends Component {

    constructor(props) {
        super(props);

        this.state = {data}
        this.onToggle = this.onToggle.bind(this);
    }


    onToggle(node, toggled) {
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
        const { data } = this.state;

        return (
            <Treebeard
                data={data}
                onToggle={this.onToggle}
            />
        )
    }
}