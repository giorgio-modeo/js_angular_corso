let data = {
    "Fish": {
    "trout": {},
    "salmon": {}
  },

  "Tree": {
    "Huge": {
      "sequoia": {},
      "oak": {}
    },
    "Flowering": {
        "apple tree": {},
      "magnolia": {}
    }
  }
};

function createTree(data) {
const UL = document.createElement('ul');

for (const post in data) {
    const LI = document.createElement('li');
    
    LI.textContent = post;
    UL.appendChild(LI);
    const ND = data[post];
    if(Object.keys(ND).length > 0) { 
        createTree(ND,LI);
    };
    document.body.appendChild(UL);
};}
createTree(data);
