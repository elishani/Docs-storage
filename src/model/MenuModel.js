export default class MenuModel {
    constructor(parseMenu){
        this.id = parseMenu.id;
        this.name = parseMenu.get("name");
        this.parent = parseMenu.get("parent");
    }   
}