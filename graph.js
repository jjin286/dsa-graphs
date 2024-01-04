/** Node class for graph. */

class Node {
  constructor(value, adjacent = new Set()) {
    this.value = value;
    this.adjacent = adjacent;
  }
}


/** Graph class. */

class Graph {
  constructor() {
    this.nodes = new Set();
  }

  /** add Node instance and add it to nodes property on graph. */
  addNode(node) {
    this.nodes.add(node);
  }

  /** add array of new Node instances and adds to them to nodes property. */
  addNodes(nodeArray) {
    for(let node of nodeArray){
      this.addNode(node);
    }
  }

  /** add edge between nodes n1,n2 */
  addEdge(n1, n2) {
    n1.adjacent.add(n2);
    n2.adjacent.add(n1);
  }

  /** remove edge between nodes n1,n2 */
  removeEdge(n1, n2) {
    n1.adjacent.delete(n2);
    n2.adjacent.delete(n1);
  }

  /** remove node from graph:
   *
   * - remove it from nodes property of graph
   * - update any adjacency lists using that node
   */
  removeNode(node) {
    for(let neighbor of node.adjacent){
      this.removeEdge(node, neighbor);
    }
    this.nodes.delete(node);
  }

  /** traverse graph with DFS and returns array of Node values */
  depthFirstSearch(start) {
    let visitStack = [start];
    let visited = new Set(visitStack);
    let order = [];

    while(visitStack.length > 0){
      let currentNode = visitStack.pop();
      order.push(currentNode.value);

      for(let neighbor of currentNode.adjacent){
        if(!visited.has(neighbor)){
          visitStack.push(neighbor);
          visited.add(neighbor);
        }
      }
    }

    return order;
  }

  /** traverse graph with BDS and returns array of Node values */
  breadthFirstSearch(start) {
    let visitQueue = [start];
    let visited = new Set(visitQueue);
    let order = [];

    while(visitQueue.length > 0){
      let currentNode = visitQueue.shift();
      order.push(currentNode.value);

      for(let neighbor of currentNode.adjacent){
        if(!visited.has(neighbor)){
          visitQueue.push(neighbor);
          visited.add(neighbor);
        }
      }
    }

    return order;
  }

  /** find the distance of the shortest path from the start node to the end node */
  distanceOfShortestPath(start, end) {
    
  }
}

module.exports = { Graph, Node }
