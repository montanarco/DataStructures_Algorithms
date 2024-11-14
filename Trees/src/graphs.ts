class Graph {
    numberOfNodes: number;
    adjacentList: { [key: string]: any[] };

    constructor() {
      this.numberOfNodes = 0;
      this.adjacentList = {};
    }

    addVertex(node: any) {
        if(this.adjacentList[node]){
            console.log(" This node is already in this graph: ", node)
            return
        }
        this.adjacentList[node] = []
        this.numberOfNodes++
    }

    addEdge(node1: any, node2: any) {
        if(!this.adjacentList[node1])
            this.addVertex(node1)

        if(!this.adjacentList[node2])
            this.addVertex(node2)

        if(!this.adjacentList[node1].includes(node2))
            this.adjacentList[node1].push(node2);

        if(!this.adjacentList[node2].includes(node1))
            this.adjacentList[node2].push(node1);
    }

    showConnections() {
        const allNodes = Object.keys(this.adjacentList);
        for (let node of allNodes) {
          let nodeConnections = this.adjacentList[node];
          let connections = "";
          let vertex;
          for (vertex of nodeConnections) {
            connections += vertex + " ";
          }
          console.log(node + "-->" + connections);
        }
    }
}

const myGraph = new Graph();
myGraph.addVertex("0");
myGraph.addVertex("1");
myGraph.addVertex("2");
myGraph.addVertex("3");
myGraph.addVertex("4");
myGraph.addVertex("5");
myGraph.addVertex("6");
myGraph.addEdge("3", "1");
myGraph.addEdge("3", "4");
myGraph.addEdge("4", "2");
myGraph.addEdge("4", "5");
myGraph.addEdge("1", "2");
myGraph.addEdge("1", "0");
myGraph.addEdge("0", "2");
myGraph.addEdge("6", "5");

myGraph.showConnections();