import React, { Component } from 'react';
import { Treebeard } from 'react-treebeard';
import Parse from 'parse';
import MenuModel from '../model/MenuModel'
export default class DocTreebreard extends Component {

    constructor(props) {
        super(props);

        this.state = { data: {}, pdfFiles: [] }
        this.onToggle = this.onToggle.bind(this);
        this.getPdfFiles = this.getPdfFiles.bind(this);
    }


    async componentDidMount() {
        const folder = Parse.Object.extend('folder');
        const query = new Parse.Query(folder);
        const results = await query.find();
        const menu = results.map(parseMenu => new MenuModel(parseMenu));

        let data = {
            name: "root",
            toggled: true,
            children: []
        }

        for (let i = 0; i < menu.length; i++) {
            if (!menu[i].parent) {
                let folder = {
                    name: menu[i].name,
                    id: menu[i].id,
                    children: []
                }
                for (let j = 0; j < menu.length; j++) {
                    if (menu[j].parent === menu[i].id) {
                        folder.children.push({
                            name: menu[j].name,
                            id: menu[j].id
                        })
                    }
                }
                data.children.push(folder);
            }
        }

        this.setState({ data });
    }

    async getPdfFiles(parent) {
        const folderTable = Parse.Object.extend('folder');
        const queryFolder = new Parse.Query(folderTable);
        const folder = await queryFolder.get(parent);

        const pdfStore = Parse.Object.extend('pdfStore');
        const query = new Parse.Query(pdfStore);
        query.equalTo("parent", folder);

        const pdfFiles = await query.find();
        this.setState({
            pdfFiles: pdfFiles
        })

        console.log(pdfFiles);
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

        } else {
            this.getPdfFiles(node.id)
        }
        this.setState(() => ({ cursor: node, data: Object.assign({}, data) }));
    }


    render() {
        const { data, pdfFiles } = this.state


    
        const pdfList = pdfFiles.map(pdfFile => 
            <div>
                <a href={pdfFile.get("file")._url}>{pdfFile.get("name")}</a>
            </div>
        )

        return (
            <div>
                <Treebeard
                    data={data}
                    onToggle={this.onToggle}
                />
                {pdfList}
            </div>
        )
    }
}