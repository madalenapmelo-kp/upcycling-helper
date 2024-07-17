document.addEventListener('DOMContentLoaded', function() {
    // Hide all sections initially except the first question
    document.getElementById('recycle-questions').classList.add('hidden');
    document.getElementById('create-questions').classList.add('hidden');

    document.getElementById('project-type').addEventListener('change', function() {
        document.getElementById('add-idea-button').classList.remove('hidden');
        const projectType = this.value;
        document.getElementById('recycle-questions').classList.add('hidden');
        document.getElementById('create-questions').classList.add('hidden');
        if (projectType === 'recycle') {
            document.getElementById('recycle-questions').classList.remove('hidden');
        } else if (projectType === 'create') {
            document.getElementById('create-questions').classList.remove('hidden');
        }
    });

    document.getElementById('add-idea-button').addEventListener('click', function() {
        const projectType = document.getElementById('project-type').value;
        
        // Define the recycle project elements
        const materialsRecycle = document.getElementById('materials-to-recycle').value;
        const recycleIdea = document.getElementById('recycle-idea').value;
        
        // Define the create project elements
        const materialsCreate = document.getElementById('materials-to-use').value;
        const projectCreate = document.getElementById('project-type-create').value;
        const ideaCreate = document.getElementById('create-idea').value;

        // Generate idea card for project inputs
        if (projectType === "recycle" && materialsRecycle === "towels" && recycleIdea === "utilities") {
            const ideaBoard = document.getElementById('idea-board');
            const ideaCard = document.createElement('div');
            ideaCard.className = 'idea-card';
            ideaCard.innerHTML = `<h3>Recycling project</h3><p><b>Project:</b> Kitchen Towels<p><b>Description:</b> Cut old towels into smaller pieces to create kitchen towels.</p><b>Tools:</b> Scissors, sewing machine or needle and thread.</p><p><b>Difficulty:</b> Easy</p><p><b>Estimated Time:</b> 1-2 hours</p><button class="delete-button-idea-card">Delete</button>`;
            document.getElementById('idea-board').classList.remove('hidden');
            ideaBoard.appendChild(ideaCard);

            ideaCard.querySelector('.delete-button-idea-card').addEventListener('click', function() {
                ideaBoard.removeChild(ideaCard);
                if (ideaBoard.children.length === 1) {
                    ideaBoard.classList.add('hidden');
                }
            });
        } else if (projectType === "recycle" && materialsRecycle === "towels" && recycleIdea === "clothing") {
            const ideaBoard = document.getElementById('idea-board');
            const ideaCard = document.createElement('div');
            ideaCard.className = 'idea-card';
            ideaCard.innerHTML = `<h3>Recycling project</h3><p><b>Project:</b> Baby Bibs<p><b>Description:</b> Cut towel fabric into bib shapes and sew edges.</p><b>Tools:</b> Scissors, sewing machine or needle and thread.</p><p><b>Difficulty:</b> Easy</p><p><b>Estimated Time:</b> 1-2 hours</p><button class="delete-button-idea-card">Delete</button>`;
            document.getElementById('idea-board').classList.remove('hidden');
            ideaBoard.appendChild(ideaCard);

            ideaCard.querySelector('.delete-button-idea-card').addEventListener('click', function() {
                ideaBoard.removeChild(ideaCard);
                if (ideaBoard.children.length === 1) {
                    ideaBoard.classList.add('hidden');
                }
            });
        } else if (projectType === "recycle" && materialsRecycle === "towels" && recycleIdea === "decorations") {
            const ideaBoard = document.getElementById('idea-board');
            const ideaCard = document.createElement('div');
            ideaCard.className = 'idea-card';
            ideaCard.innerHTML = `<h3>Recycling project</h3><p><b>Project:</b> Towel Flowers<p><b>Description:</b> Fold and roll towel pieces into flower shapes.</p><b>Tools:</b> Scissors, needle and thread.</p><p><b>Difficulty:</b> Easy</p><p><b>Estimated Time:</b> 1 hour</p><button class="delete-button-idea-card">Delete</button>`;
            document.getElementById('idea-board').classList.remove('hidden');
            ideaBoard.appendChild(ideaCard);

            ideaCard.querySelector('.delete-button-idea-card').addEventListener('click', function() {
                ideaBoard.removeChild(ideaCard);
                if (ideaBoard.children.length === 1) {
                    ideaBoard.classList.add('hidden');
                }
            });
        } else if (projectType === "recycle" && materialsRecycle === "towels" && recycleIdea === "suggestions") {
            const ideaBoard = document.getElementById('idea-board');
            const ideaCard = document.createElement('div');
            ideaCard.className = 'idea-card';
            ideaCard.innerHTML = `<h3>Recycling project</h3><p><b>Project:</b> Pet Bed<p><b>Description:</b> Stuff old towels into a fabric cover to create a bed for pets.</p><b>Tools:</b> Scissors, sewing machine or needle and thread.</p><p><b>Difficulty:</b> Moderate</p><p><b>Estimated Time:</b> 3-4 hours</p><button class="delete-button-idea-card">Delete</button>`;
            document.getElementById('idea-board').classList.remove('hidden');
            ideaBoard.appendChild(ideaCard);

            ideaCard.querySelector('.delete-button-idea-card').addEventListener('click', function() {
                ideaBoard.removeChild(ideaCard);
                if (ideaBoard.children.length === 1) {
                    ideaBoard.classList.add('hidden');
                }
            });
        } else if (projectType === "recycle" && materialsRecycle === "sheets" && recycleIdea === "utilities") {
            const ideaBoard = document.getElementById('idea-board');
            const ideaCard = document.createElement('div');
            ideaCard.className = 'idea-card';
            ideaCard.innerHTML = `<h3>Recycling project</h3><p><b>Project:</b> Pillowcases<p><b>Description:</b> Cut sheet fabric and sew into pillowcase shapes.</p><b>Tools:</b> Scissors, sewing machine or needle and thread.</p><p><b>Difficulty:</b> Easy</p><p><b>Estimated Time:</b> 1-2 hours</p><button class="delete-button-idea-card">Delete</button>`;
            document.getElementById('idea-board').classList.remove('hidden');
            ideaBoard.appendChild(ideaCard);

            ideaCard.querySelector('.delete-button-idea-card').addEventListener('click', function() {
                ideaBoard.removeChild(ideaCard);
                if (ideaBoard.children.length === 1) {
                    ideaBoard.classList.add('hidden');
                }
            });
        } else if (projectType === "recycle" && materialsRecycle === "sheets" && recycleIdea === "clothing") {
            const ideaBoard = document.getElementById('idea-board');
            const ideaCard = document.createElement('div');
            ideaCard.className = 'idea-card';
            ideaCard.innerHTML = `<h3>Recycling project</h3><p><b>Project:</b> Aprons<p><b>Description:</b> Cut and sew sheet fabric into apron shapes.</p><b>Tools:</b> Scissors, sewing machine or needle and thread.</p><p><b>Difficulty:</b> Easy</p><p><b>Estimated Time:</b> 2-3 hours</p><button class="delete-button-idea-card">Delete</button>`;
            document.getElementById('idea-board').classList.remove('hidden');
            ideaBoard.appendChild(ideaCard);

            ideaCard.querySelector('.delete-button-idea-card').addEventListener('click', function() {
                ideaBoard.removeChild(ideaCard);
                if (ideaBoard.children.length === 1) {
                    ideaBoard.classList.add('hidden');
                }
            });
        } else if (projectType === "recycle" && materialsRecycle === "sheets" && recycleIdea === "decorations") {
            const ideaBoard = document.getElementById('idea-board');
            const ideaCard = document.createElement('div');
            ideaCard.className = 'idea-card';
            ideaCard.innerHTML = `<h3>Recycling project</h3><p><b>Project:</b> Fabric Garland<p><b>Description:</b> Cut sheets into strips and tie them onto a string for a garland.</p><b>Tools:</b> Scissors.</p><p><b>Difficulty:</b> Easy</p><p><b>Estimated Time:</b> 1-2 hours</p><button class="delete-button-idea-card">Delete</button>`;
            document.getElementById('idea-board').classList.remove('hidden');
            ideaBoard.appendChild(ideaCard);

            ideaCard.querySelector('.delete-button-idea-card').addEventListener('click', function() {
                ideaBoard.removeChild(ideaCard);
                if (ideaBoard.children.length === 1) {
                    ideaBoard.classList.add('hidden');
                }
            });
        } else if (projectType === "recycle" && materialsRecycle === "sheets" && recycleIdea === "suggestions") {
            const ideaBoard = document.getElementById('idea-board');
            const ideaCard = document.createElement('div');
            ideaCard.className = 'idea-card';
            ideaCard.innerHTML = `<h3>Recycling project</h3><p><b>Project:</b> Picnic Blanket<p><b>Description:</b> Layer and sew several sheets together for a thicker blanket.</p><b>Tools:</b> Scissors, sewing machine.</p><p><b>Difficulty:</b> Moderate</p><p><b>Estimated Time:</b> 3-4 hours</p><button class="delete-button-idea-card">Delete</button>`;
            document.getElementById('idea-board').classList.remove('hidden');
            ideaBoard.appendChild(ideaCard);

            ideaCard.querySelector('.delete-button-idea-card').addEventListener('click', function() {
                ideaBoard.removeChild(ideaCard);
                if (ideaBoard.children.length === 1) {
                    ideaBoard.classList.add('hidden');
                }
            });
        } else if (projectType === "recycle" && materialsRecycle === "clothing" && recycleIdea === "utilities") {
            const ideaBoard = document.getElementById('idea-board');
            const ideaCard = document.createElement('div');
            ideaCard.className = 'idea-card';
            ideaCard.innerHTML = `<h3>Recycling project</h3><p><b>Project:</b> Cleaning rags<p><b>Description:</b> Cut old clothing into small squares for cleaning rags.</p><b>Tools:</b> Scissors.</p><p><b>Difficulty:</b> Easy</p><p><b>Estimated Time:</b> 1 hour</p><button class="delete-button-idea-card">Delete</button>`;
            document.getElementById('idea-board').classList.remove('hidden');
            ideaBoard.appendChild(ideaCard);

            ideaCard.querySelector('.delete-button-idea-card').addEventListener('click', function() {
                ideaBoard.removeChild(ideaCard);
                if (ideaBoard.children.length === 1) {
                    ideaBoard.classList.add('hidden');
                }
            });
        } else if (projectType === "recycle" && materialsRecycle === "clothing" && recycleIdea === "clothing") {
            const ideaBoard = document.getElementById('idea-board');
            const ideaCard = document.createElement('div');
            ideaCard.className = 'idea-card';
            ideaCard.innerHTML = `<h3>Recycling project</h3><p><b>Project:</b> Patchwork jeans<p><b>Description:</b> Use pieces of old clothing to patch up and decorate jeans.</p><b>Tools:</b> Scissors, sewing machine or needle and thread.</p><p><b>Difficulty:</b> Moderate</p><p><b>Estimated Time:</b> 2-3 hours</p><button class="delete-button-idea-card">Delete</button>`;
            document.getElementById('idea-board').classList.remove('hidden');
            ideaBoard.appendChild(ideaCard);

            ideaCard.querySelector('.delete-button-idea-card').addEventListener('click', function() {
                ideaBoard.removeChild(ideaCard);
                if (ideaBoard.children.length === 1) {
                    ideaBoard.classList.add('hidden');
                }
            });
        } else if (projectType === "recycle" && materialsRecycle === "clothing" && recycleIdea === "decorations") {
            const ideaBoard = document.getElementById('idea-board');
            const ideaCard = document.createElement('div');
            ideaCard.className = 'idea-card';
            ideaCard.innerHTML = `<h3>Recycling project</h3><p><b>Project:</b> Fabric Wall Art<p><b>Description:</b> Stretch pieces of clothing fabric over frames for wall art.</p><b>Tools:</b> Scissors, staple gun.</p><p><b>Difficulty:</b> Easy</p><p><b>Estimated Time:</b> 1-2 hours</p><button class="delete-button-idea-card">Delete</button>`;
            document.getElementById('idea-board').classList.remove('hidden');
            ideaBoard.appendChild(ideaCard);

            ideaCard.querySelector('.delete-button-idea-card').addEventListener('click', function() {
                ideaBoard.removeChild(ideaCard);
                if (ideaBoard.children.length === 1) {
                    ideaBoard.classList.add('hidden');
                }
            });
        } else if (projectType === "recycle" && materialsRecycle === "clothing" && recycleIdea === "suggestions") {
            const ideaBoard = document.getElementById('idea-board');
            const ideaCard = document.createElement('div');
            ideaCard.className = 'idea-card';
            ideaCard.innerHTML = `<h3>Recycling project</h3><p><b>Project:</b> Tote Bag<p><b>Description:</b> Cut and sew old clothing into a tote bag shape.</p><b>Tools:</b> Scissors, sewing machine or needle and thread.</p><p><b>Difficulty:</b> Moderate</p><p><b>Estimated Time:</b> 2-3 hours</p><button class="delete-button-idea-card">Delete</button>`;
            document.getElementById('idea-board').classList.remove('hidden');
            ideaBoard.appendChild(ideaCard);

            ideaCard.querySelector('.delete-button-idea-card').addEventListener('click', function() {
                ideaBoard.removeChild(ideaCard);
                if (ideaBoard.children.length === 1) {
                    ideaBoard.classList.add('hidden');
                }
            });
        } else if (projectCreate == 'crochet' && materialsCreate == 'cotton' && ideaCreate == 'accessories' ) {
            const ideaBoard = document.getElementById('idea-board');
            const ideaCard = document.createElement('div');
            ideaCard.className = 'idea-card';
            ideaCard.innerHTML = `<h3>Project idea</h3><p><b>Project:</b> Cotton Headband<p><b>Description:</b> A simple, stretchy headband perfect for everyday wear.</p><b>Tools:</b> Crochet hook or knitting needles, cotton yarn.</p><p><b>Difficulty:</b> Easy</p><p><b>Estimated Time:</b> 1-2 hours</p><button class="delete-button-idea-card">Delete</button>`;
            document.getElementById('idea-board').classList.remove('hidden');
            ideaBoard.appendChild(ideaCard);

            ideaCard.querySelector('.delete-button-idea-card').addEventListener('click', function() {
                ideaBoard.removeChild(ideaCard);
                if (ideaBoard.children.length === 1) {
                    ideaBoard.classList.add('hidden');
                }
            });
            
            const resourceBoard = document.getElementById('resource-board');

            const resourceCard = document.createElement('div');
            resourceCard.className = 'resource-card';
            resourceCard.innerHTML = `<h3>Raverly</h3><p><a href="https://www.ravelry.com">Raverly</a> is a community site, an organizational tool, and a yarn & pattern database for knitters and crocheters.</p><p><h3>LoveCrafts</h3></p><p>You can find a wide variety of free crochet and knitting patterns at <a href="https://www.lovecrafts.com/en-gb/l/crochet/crochet-patterns/free-crochet-patterns">LoveCrafts</a></p><p><h3>Wool and the Gang</h3></p><p><a href="https://www.woolandthegang.com/en/free-patterns?utf8=%E2%9C%93&filters%5B5%5D%5B%5D=42&filters%5B5%5D%5B%5D=55&filters%5B5%5D%5B%5D=39&filters%5B5%5D%5B%5D=54&filters%5B5%5D%5B%5D=43&filters%5B5%5D%5B%5D=47&filters%5B7%5D%5B%5D=61&filters%5B7%5D%5B%5D=62">Wool and the Gang</a> provides a wider range of free crochet and knitting patterns suitable for different experience levels - if you are looking specifically for clothing items, it can be a great place to start.</p><button class="delete-button-resource-card">Delete</button>`

            resourceBoard.classList.remove('hidden');
            resourceBoard.appendChild(resourceCard);

            resourceCard.querySelector('.delete-button-resource-card').addEventListener('click', function() {
                resourceBoard.removeChild(resourceCard);
                if (resourceBoard.children.length === 1) {
                    resourceBoard.classList.add('hidden');
                }
            }
        )
    } else if (projectCreate == 'crochet' && materialsCreate == 'cotton' && ideaCreate == 'clothing-items' ) {
            const ideaBoard = document.getElementById('idea-board');
            const ideaCard = document.createElement('div');
            ideaCard.className = 'idea-card';
            ideaCard.innerHTML = `<h3>Project idea</h3><p><b>Project:</b> Wool Sweater<p><b>Description:</b> A cozy, warm sweater ideal for winter.</p><b>Tools:</b> Knitting needles, wool yarn.</p><p><b>Difficulty:</b> Advanced</p><p><b>Estimated Time:</b> 20-30 hours</p><button class="delete-button-idea-card">Delete</button>`;
            document.getElementById('idea-board').classList.remove('hidden');
            ideaBoard.appendChild(ideaCard);

            ideaCard.querySelector('.delete-button-idea-card').addEventListener('click', function() {
                ideaBoard.removeChild(ideaCard);
                if (ideaBoard.children.length === 1) {
                    ideaBoard.classList.add('hidden');
                }
            });
            
            const resourceBoard = document.getElementById('resource-board');

            const resourceCard = document.createElement('div');
            resourceCard.className = 'resource-card';
            resourceCard.innerHTML = `<h3>Raverly</h3><p><a href="https://www.ravelry.com">Raverly</a> is a community site, an organizational tool, and a yarn & pattern database for knitters and crocheters.</p><p><h3>LoveCrafts</h3></p><p>You can find a wide variety of free crochet and knitting patterns at <a href="https://www.lovecrafts.com/en-gb/l/crochet/crochet-patterns/free-crochet-patterns">LoveCrafts</a></p><p><h3>Wool and the Gang</h3></p><p><a href="https://www.woolandthegang.com/en/free-patterns?utf8=%E2%9C%93&filters%5B5%5D%5B%5D=42&filters%5B5%5D%5B%5D=55&filters%5B5%5D%5B%5D=39&filters%5B5%5D%5B%5D=54&filters%5B5%5D%5B%5D=43&filters%5B5%5D%5B%5D=47&filters%5B7%5D%5B%5D=61&filters%5B7%5D%5B%5D=62">Wool and the Gang</a> provides a wider range of free crochet and knitting patterns suitable for different experience levels - if you are looking specifically for clothing items, it can be a great place to start.</p><button class="delete-button-resource-card">Delete</button>`

            resourceBoard.classList.remove('hidden');
            resourceBoard.appendChild(resourceCard);

            resourceCard.querySelector('.delete-button-resource-card').addEventListener('click', function() {
                resourceBoard.removeChild(resourceCard);
                if (resourceBoard.children.length === 1) {
                    resourceBoard.classList.add('hidden');
                }
            }
        )
    } else if (projectCreate == 'crochet' && materialsCreate == 'cotton' && ideaCreate == 'household-items' ) {
            const ideaBoard = document.getElementById('idea-board');
            const ideaCard = document.createElement('div');
            ideaCard.className = 'idea-card';
            ideaCard.innerHTML = `<h3>Project idea</h3><p><b>Project:</b> Cotton Dishcloths<p><b>Description:</b> Durable and absorbent dishcloths for kitchen use.</p><b>Tools:</b> Crochet hook, cotton yarn.</p><p><b>Difficulty:</b> Easy</p><p><b>Estimated Time:</b> 1-2 hours per dishcloth</p><button class="delete-button-idea-card">Delete</button>`;
            document.getElementById('idea-board').classList.remove('hidden');
            ideaBoard.appendChild(ideaCard);

            ideaCard.querySelector('.delete-button-idea-card').addEventListener('click', function() {
                ideaBoard.removeChild(ideaCard);
                if (ideaBoard.children.length === 1) {
                    ideaBoard.classList.add('hidden');
                }
            });
            
            const resourceBoard = document.getElementById('resource-board');

            const resourceCard = document.createElement('div');
            resourceCard.className = 'resource-card';
            resourceCard.innerHTML = `<h3>Raverly</h3><p><a href="https://www.ravelry.com">Raverly</a> is a community site, an organizational tool, and a yarn & pattern database for knitters and crocheters.</p><p><h3>LoveCrafts</h3></p><p>You can find a wide variety of free crochet and knitting patterns at <a href="https://www.lovecrafts.com/en-gb/l/crochet/crochet-patterns/free-crochet-patterns">LoveCrafts</a></p><p><h3>Wool and the Gang</h3></p><p><a href="https://www.woolandthegang.com/en/free-patterns?utf8=%E2%9C%93&filters%5B5%5D%5B%5D=42&filters%5B5%5D%5B%5D=55&filters%5B5%5D%5B%5D=39&filters%5B5%5D%5B%5D=54&filters%5B5%5D%5B%5D=43&filters%5B5%5D%5B%5D=47&filters%5B7%5D%5B%5D=61&filters%5B7%5D%5B%5D=62">Wool and the Gang</a> provides a wider range of free crochet and knitting patterns suitable for different experience levels - if you are looking specifically for clothing items, it can be a great place to start.</p><button class="delete-button-resource-card">Delete</button>`

            resourceBoard.classList.remove('hidden');
            resourceBoard.appendChild(resourceCard);

            resourceCard.querySelector('.delete-button-resource-card').addEventListener('click', function() {
                resourceBoard.removeChild(resourceCard);
                if (resourceBoard.children.length === 1) {
                    resourceBoard.classList.add('hidden');
                }
            }
        )
    } else if (projectCreate == 'crochet' && materialsCreate == 'cotton' && ideaCreate == 'suggestions' ) {
            const ideaBoard = document.getElementById('idea-board');
            const ideaCard = document.createElement('div');
            ideaCard.className = 'idea-card';
            ideaCard.innerHTML = `<h3>Project idea</h3><p><b>Project:</b> Wool Felted Coasters<p><b>Description:</b> Stylish coasters made by felting wool for home decor.</p><b>Tools:</b> Felting needle, wool roving.</p><p><b>Difficulty:</b> Moderate</p><p><b>Estimated Time:</b> 3-4 hours</p><button class="delete-button-idea-card">Delete</button>`;
            document.getElementById('idea-board').classList.remove('hidden');
            ideaBoard.appendChild(ideaCard);

            ideaCard.querySelector('.delete-button-idea-card').addEventListener('click', function() {
                ideaBoard.removeChild(ideaCard);
                if (ideaBoard.children.length === 1) {
                    ideaBoard.classList.add('hidden');
                }
            });
            
            const resourceBoard = document.getElementById('resource-board');

            const resourceCard = document.createElement('div');
            resourceCard.className = 'resource-card';
            resourceCard.innerHTML = `<h3>Raverly</h3><p><a href="https://www.ravelry.com">Raverly</a> is a community site, an organizational tool, and a yarn & pattern database for knitters and crocheters.</p><p><h3>LoveCrafts</h3></p><p>You can find a wide variety of free crochet and knitting patterns at <a href="https://www.lovecrafts.com/en-gb/l/crochet/crochet-patterns/free-crochet-patterns">LoveCrafts</a></p><p><h3>Wool and the Gang</h3></p><p><a href="https://www.woolandthegang.com/en/free-patterns?utf8=%E2%9C%93&filters%5B5%5D%5B%5D=42&filters%5B5%5D%5B%5D=55&filters%5B5%5D%5B%5D=39&filters%5B5%5D%5B%5D=54&filters%5B5%5D%5B%5D=43&filters%5B5%5D%5B%5D=47&filters%5B7%5D%5B%5D=61&filters%5B7%5D%5B%5D=62">Wool and the Gang</a> provides a wider range of free crochet and knitting patterns suitable for different experience levels - if you are looking specifically for clothing items, it can be a great place to start.</p><button class="delete-button-resource-card">Delete</button>`

            resourceBoard.classList.remove('hidden');
            resourceBoard.appendChild(resourceCard);

            resourceCard.querySelector('.delete-button-resource-card').addEventListener('click', function() {
                resourceBoard.removeChild(resourceCard);
                if (resourceBoard.children.length === 1) {
                    resourceBoard.classList.add('hidden');
                }
            }
        )
    } else if (projectCreate == 'crochet' && materialsCreate == 'linen' && ideaCreate == 'accessories' ) {
            const ideaBoard = document.getElementById('idea-board');
            const ideaCard = document.createElement('div');
            ideaCard.className = 'idea-card';
            ideaCard.innerHTML = `<h3>Project idea</h3><p><b>Project:</b> Linen Market Bag<p><b>Description:</b> A sturdy, reusable bag for grocery shopping.</p><b>Tools:</b> Crochet hook, linen yarn.</p><p><b>Difficulty:</b> Moderate</p><p><b>Estimated Time:</b> 5-6 hours</p><button class="delete-button-idea-card">Delete</button>`;
            document.getElementById('idea-board').classList.remove('hidden');
            ideaBoard.appendChild(ideaCard);

            ideaCard.querySelector('.delete-button-idea-card').addEventListener('click', function() {
                ideaBoard.removeChild(ideaCard);
                if (ideaBoard.children.length === 1) {
                    ideaBoard.classList.add('hidden');
                }
            });
            
            const resourceBoard = document.getElementById('resource-board');

            const resourceCard = document.createElement('div');
            resourceCard.className = 'resource-card';
            resourceCard.innerHTML = `<h3>Raverly</h3><p><a href="https://www.ravelry.com">Raverly</a> is a community site, an organizational tool, and a yarn & pattern database for knitters and crocheters.</p><p><h3>LoveCrafts</h3></p><p>You can find a wide variety of free crochet and knitting patterns at <a href="https://www.lovecrafts.com/en-gb/l/crochet/crochet-patterns/free-crochet-patterns">LoveCrafts</a></p><p><h3>Wool and the Gang</h3></p><p><a href="https://www.woolandthegang.com/en/free-patterns?utf8=%E2%9C%93&filters%5B5%5D%5B%5D=42&filters%5B5%5D%5B%5D=55&filters%5B5%5D%5B%5D=39&filters%5B5%5D%5B%5D=54&filters%5B5%5D%5B%5D=43&filters%5B5%5D%5B%5D=47&filters%5B7%5D%5B%5D=61&filters%5B7%5D%5B%5D=62">Wool and the Gang</a> provides a wider range of free crochet and knitting patterns suitable for different experience levels - if you are looking specifically for clothing items, it can be a great place to start.</p><button class="delete-button-resource-card">Delete</button>`

            resourceBoard.classList.remove('hidden');
            resourceBoard.appendChild(resourceCard);

            resourceCard.querySelector('.delete-button-resource-card').addEventListener('click', function() {
                resourceBoard.removeChild(resourceCard);
                if (resourceBoard.children.length === 1) {
                    resourceBoard.classList.add('hidden');
                }
            }
        )
    } else if (projectCreate == 'crochet' && materialsCreate == 'linen' && ideaCreate == 'clothing-items' ) {
            const ideaBoard = document.getElementById('idea-board');
            const ideaCard = document.createElement('div');
            ideaCard.className = 'idea-card';
            ideaCard.innerHTML = `<h3>Project idea</h3><p><b>Project:</b> Linen Summer Top<p><b>Description:</b> A light and breathable top for warm weather.</p><b>Tools:</b> Knitting needles, linen yarn.</p><p><b>Difficulty:</b> Moderate</p><p><b>Estimated Time:</b> 15-20 hours</p><button class="delete-button-idea-card">Delete</button>`;
            document.getElementById('idea-board').classList.remove('hidden');
            ideaBoard.appendChild(ideaCard);

            ideaCard.querySelector('.delete-button-idea-card').addEventListener('click', function() {
                ideaBoard.removeChild(ideaCard);
                if (ideaBoard.children.length === 1) {
                    ideaBoard.classList.add('hidden');
                }
            });
            
            const resourceBoard = document.getElementById('resource-board');

            const resourceCard = document.createElement('div');
            resourceCard.className = 'resource-card';
            resourceCard.innerHTML = `<h3>Raverly</h3><p><a href="https://www.ravelry.com">Raverly</a> is a community site, an organizational tool, and a yarn & pattern database for knitters and crocheters.</p><p><h3>LoveCrafts</h3></p><p>You can find a wide variety of free crochet and knitting patterns at <a href="https://www.lovecrafts.com/en-gb/l/crochet/crochet-patterns/free-crochet-patterns">LoveCrafts</a></p><p><h3>Wool and the Gang</h3></p><p><a href="https://www.woolandthegang.com/en/free-patterns?utf8=%E2%9C%93&filters%5B5%5D%5B%5D=42&filters%5B5%5D%5B%5D=55&filters%5B5%5D%5B%5D=39&filters%5B5%5D%5B%5D=54&filters%5B5%5D%5B%5D=43&filters%5B5%5D%5B%5D=47&filters%5B7%5D%5B%5D=61&filters%5B7%5D%5B%5D=62">Wool and the Gang</a> provides a wider range of free crochet and knitting patterns suitable for different experience levels - if you are looking specifically for clothing items, it can be a great place to start.</p><button class="delete-button-resource-card">Delete</button>`

            resourceBoard.classList.remove('hidden');
            resourceBoard.appendChild(resourceCard);

            resourceCard.querySelector('.delete-button-resource-card').addEventListener('click', function() {
                resourceBoard.removeChild(resourceCard);
                if (resourceBoard.children.length === 1) {
                    resourceBoard.classList.add('hidden');
                }
            }
        )
    } else if (projectCreate == 'crochet' && materialsCreate == 'linen' && ideaCreate == 'household-items' ) {
            const ideaBoard = document.getElementById('idea-board');
            const ideaCard = document.createElement('div');
            ideaCard.className = 'idea-card';
            ideaCard.innerHTML = `<h3>Project idea</h3><p><b>Project:</b> Linen Placemats<p><b>Description:</b> Elegant placemats to enhance your dining table.</p><b>Tools:</b> Crochet hook, linen yarn.</p><p><b>Difficulty:</b> Easy</p><p><b>Estimated Time:</b> 3-4 hours per placemat</p><button class="delete-button-idea-card">Delete</button>`;
            document.getElementById('idea-board').classList.remove('hidden');
            ideaBoard.appendChild(ideaCard);

            ideaCard.querySelector('.delete-button-idea-card').addEventListener('click', function() {
                ideaBoard.removeChild(ideaCard);
                if (ideaBoard.children.length === 1) {
                    ideaBoard.classList.add('hidden');
                }
            });
            
            const resourceBoard = document.getElementById('resource-board');

            const resourceCard = document.createElement('div');
            resourceCard.className = 'resource-card';
            resourceCard.innerHTML = `<h3>Raverly</h3><p><a href="https://www.ravelry.com">Raverly</a> is a community site, an organizational tool, and a yarn & pattern database for knitters and crocheters.</p><p><h3>LoveCrafts</h3></p><p>You can find a wide variety of free crochet and knitting patterns at <a href="https://www.lovecrafts.com/en-gb/l/crochet/crochet-patterns/free-crochet-patterns">LoveCrafts</a></p><p><h3>Wool and the Gang</h3></p><p><a href="https://www.woolandthegang.com/en/free-patterns?utf8=%E2%9C%93&filters%5B5%5D%5B%5D=42&filters%5B5%5D%5B%5D=55&filters%5B5%5D%5B%5D=39&filters%5B5%5D%5B%5D=54&filters%5B5%5D%5B%5D=43&filters%5B5%5D%5B%5D=47&filters%5B7%5D%5B%5D=61&filters%5B7%5D%5B%5D=62">Wool and the Gang</a> provides a wider range of free crochet and knitting patterns suitable for different experience levels - if you are looking specifically for clothing items, it can be a great place to start.</p><button class="delete-button-resource-card">Delete</button>`

            resourceBoard.classList.remove('hidden');
            resourceBoard.appendChild(resourceCard);

            resourceCard.querySelector('.delete-button-resource-card').addEventListener('click', function() {
                resourceBoard.removeChild(resourceCard);
                if (resourceBoard.children.length === 1) {
                    resourceBoard.classList.add('hidden');
                }
            }
        )
    } else if (projectCreate == 'crochet' && materialsCreate == 'linen' && ideaCreate == 'suggestions' ) {
            const ideaBoard = document.getElementById('idea-board');
            const ideaCard = document.createElement('div');
            ideaCard.className = 'idea-card';
            ideaCard.innerHTML = `<h3>Project idea</h3><p><b>Project:</b> Linen Wall Hanging<p><b>Description:</b> A decorative piece to add texture to your walls.</p><b>Tools:</b> Crochet hook, linen yarn, wooden dowel.</p><p><b>Difficulty:</b> Easy</p><p><b>Estimated Time:</b> 4-5 hours</p><button class="delete-button-idea-card">Delete</button>`;
            document.getElementById('idea-board').classList.remove('hidden');
            ideaBoard.appendChild(ideaCard);

            ideaCard.querySelector('.delete-button-idea-card').addEventListener('click', function() {
                ideaBoard.removeChild(ideaCard);
                if (ideaBoard.children.length === 1) {
                    ideaBoard.classList.add('hidden');
                }
            });
            
            const resourceBoard = document.getElementById('resource-board');

            const resourceCard = document.createElement('div');
            resourceCard.className = 'resource-card';
            resourceCard.innerHTML = `<h3>Raverly</h3><p><a href="https://www.ravelry.com">Raverly</a> is a community site, an organizational tool, and a yarn & pattern database for knitters and crocheters.</p><p><h3>LoveCrafts</h3></p><p>You can find a wide variety of free crochet and knitting patterns at <a href="https://www.lovecrafts.com/en-gb/l/crochet/crochet-patterns/free-crochet-patterns">LoveCrafts</a></p><p><h3>Wool and the Gang</h3></p><p><a href="https://www.woolandthegang.com/en/free-patterns?utf8=%E2%9C%93&filters%5B5%5D%5B%5D=42&filters%5B5%5D%5B%5D=55&filters%5B5%5D%5B%5D=39&filters%5B5%5D%5B%5D=54&filters%5B5%5D%5B%5D=43&filters%5B5%5D%5B%5D=47&filters%5B7%5D%5B%5D=61&filters%5B7%5D%5B%5D=62">Wool and the Gang</a> provides a wider range of free crochet and knitting patterns suitable for different experience levels - if you are looking specifically for clothing items, it can be a great place to start.</p><button class="delete-button-resource-card">Delete</button>`

            resourceBoard.classList.remove('hidden');
            resourceBoard.appendChild(resourceCard);

            resourceCard.querySelector('.delete-button-resource-card').addEventListener('click', function() {
                resourceBoard.removeChild(resourceCard);
                if (resourceBoard.children.length === 1) {
                    resourceBoard.classList.add('hidden');
                }
            }
        )
    } else if (projectCreate == 'crochet' && materialsCreate == 'satin' && ideaCreate == 'accessories' ) {
            const ideaBoard = document.getElementById('idea-board');
            const ideaCard = document.createElement('div');
            ideaCard.className = 'idea-card';
            ideaCard.innerHTML = `<h3>Project idea</h3><p><b>Project:</b> Satin Ribbon Crochet Necklace<p><b>Description:</b> A delicate and elegant necklace made with satin ribbon.</p><b>Tools:</b> Crochet hook, satin ribbon.</p><p><b>Difficulty:</b> Easy</p><p><b>Estimated Time:</b> 1-2 hours</p><button class="delete-button-idea-card">Delete</button>`;
            document.getElementById('idea-board').classList.remove('hidden');
            ideaBoard.appendChild(ideaCard);

            ideaCard.querySelector('.delete-button-idea-card').addEventListener('click', function() {
                ideaBoard.removeChild(ideaCard);
                if (ideaBoard.children.length === 1) {
                    ideaBoard.classList.add('hidden');
                }
            });
            
            const resourceBoard = document.getElementById('resource-board');

            const resourceCard = document.createElement('div');
            resourceCard.className = 'resource-card';
            resourceCard.innerHTML = `<h3>Raverly</h3><p><a href="https://www.ravelry.com">Raverly</a> is a community site, an organizational tool, and a yarn & pattern database for knitters and crocheters.</p><p><h3>LoveCrafts</h3></p><p>You can find a wide variety of free crochet and knitting patterns at <a href="https://www.lovecrafts.com/en-gb/l/crochet/crochet-patterns/free-crochet-patterns">LoveCrafts</a></p><p><h3>Wool and the Gang</h3></p><p><a href="https://www.woolandthegang.com/en/free-patterns?utf8=%E2%9C%93&filters%5B5%5D%5B%5D=42&filters%5B5%5D%5B%5D=55&filters%5B5%5D%5B%5D=39&filters%5B5%5D%5B%5D=54&filters%5B5%5D%5B%5D=43&filters%5B5%5D%5B%5D=47&filters%5B7%5D%5B%5D=61&filters%5B7%5D%5B%5D=62">Wool and the Gang</a> provides a wider range of free crochet and knitting patterns suitable for different experience levels - if you are looking specifically for clothing items, it can be a great place to start.</p><button class="delete-button-resource-card">Delete</button>`

            resourceBoard.classList.remove('hidden');
            resourceBoard.appendChild(resourceCard);

            resourceCard.querySelector('.delete-button-resource-card').addEventListener('click', function() {
                resourceBoard.removeChild(resourceCard);
                if (resourceBoard.children.length === 1) {
                    resourceBoard.classList.add('hidden');
                }
            }
        )
    } else if (projectCreate == 'crochet' && materialsCreate == 'satin' && ideaCreate == 'clothing-items' ) {
            const ideaBoard = document.getElementById('idea-board');
            const ideaCard = document.createElement('div');
            ideaCard.className = 'idea-card';
            ideaCard.innerHTML = `<h3>Project idea</h3><p><b>Project:</b> Satin Yarn Scarf<p><b>Description:</b> A luxurious and silky scarf for special occasions.</p><b>Tools:</b> Knitting needles, satin yarn.</p><p><b>Difficulty:</b> Moderate</p><p><b>Estimated Time:</b> 10-12 hours</p><button class="delete-button-idea-card">Delete</button>`;
            document.getElementById('idea-board').classList.remove('hidden');
            ideaBoard.appendChild(ideaCard);

            ideaCard.querySelector('.delete-button-idea-card').addEventListener('click', function() {
                ideaBoard.removeChild(ideaCard);
                if (ideaBoard.children.length === 1) {
                    ideaBoard.classList.add('hidden');
                }
            });
            
            const resourceBoard = document.getElementById('resource-board');

            const resourceCard = document.createElement('div');
            resourceCard.className = 'resource-card';
            resourceCard.innerHTML = `<h3>Raverly</h3><p><a href="https://www.ravelry.com">Raverly</a> is a community site, an organizational tool, and a yarn & pattern database for knitters and crocheters.</p><p><h3>LoveCrafts</h3></p><p>You can find a wide variety of free crochet and knitting patterns at <a href="https://www.lovecrafts.com/en-gb/l/crochet/crochet-patterns/free-crochet-patterns">LoveCrafts</a></p><p><h3>Wool and the Gang</h3></p><p><a href="https://www.woolandthegang.com/en/free-patterns?utf8=%E2%9C%93&filters%5B5%5D%5B%5D=42&filters%5B5%5D%5B%5D=55&filters%5B5%5D%5B%5D=39&filters%5B5%5D%5B%5D=54&filters%5B5%5D%5B%5D=43&filters%5B5%5D%5B%5D=47&filters%5B7%5D%5B%5D=61&filters%5B7%5D%5B%5D=62">Wool and the Gang</a> provides a wider range of free crochet and knitting patterns suitable for different experience levels - if you are looking specifically for clothing items, it can be a great place to start.</p><button class="delete-button-resource-card">Delete</button>`

            resourceBoard.classList.remove('hidden');
            resourceBoard.appendChild(resourceCard);

            resourceCard.querySelector('.delete-button-resource-card').addEventListener('click', function() {
                resourceBoard.removeChild(resourceCard);
                if (resourceBoard.children.length === 1) {
                    resourceBoard.classList.add('hidden');
                }
            }
        )
    } else if (projectCreate == 'crochet' && materialsCreate == 'satin' && ideaCreate == 'household-items' ) {
            const ideaBoard = document.getElementById('idea-board');
            const ideaCard = document.createElement('div');
            ideaCard.className = 'idea-card';
            ideaCard.innerHTML = `<h3>Project idea</h3><p><b>Project:</b> Satin Pillow Cover<p><b>Description:</b> A smooth and shiny pillow cover to add a touch of luxury to your home.</p><b>Tools:</b> Crochet hook, satin yarn.</p><p><b>Difficulty:</b> Moderate</p><p><b>Estimated Time:</b> 6-8 hours</p><button class="delete-button-idea-card">Delete</button>`;
            document.getElementById('idea-board').classList.remove('hidden');
            ideaBoard.appendChild(ideaCard);

            ideaCard.querySelector('.delete-button-idea-card').addEventListener('click', function() {
                ideaBoard.removeChild(ideaCard);
                if (ideaBoard.children.length === 1) {
                    ideaBoard.classList.add('hidden');
                }
            });
            
            const resourceBoard = document.getElementById('resource-board');

            const resourceCard = document.createElement('div');
            resourceCard.className = 'resource-card';
            resourceCard.innerHTML = `<h3>Raverly</h3><p><a href="https://www.ravelry.com">Raverly</a> is a community site, an organizational tool, and a yarn & pattern database for knitters and crocheters.</p><p><h3>LoveCrafts</h3></p><p>You can find a wide variety of free crochet and knitting patterns at <a href="https://www.lovecrafts.com/en-gb/l/crochet/crochet-patterns/free-crochet-patterns">LoveCrafts</a></p><p><h3>Wool and the Gang</h3></p><p><a href="https://www.woolandthegang.com/en/free-patterns?utf8=%E2%9C%93&filters%5B5%5D%5B%5D=42&filters%5B5%5D%5B%5D=55&filters%5B5%5D%5B%5D=39&filters%5B5%5D%5B%5D=54&filters%5B5%5D%5B%5D=43&filters%5B5%5D%5B%5D=47&filters%5B7%5D%5B%5D=61&filters%5B7%5D%5B%5D=62">Wool and the Gang</a> provides a wider range of free crochet and knitting patterns suitable for different experience levels - if you are looking specifically for clothing items, it can be a great place to start.</p><button class="delete-button-resource-card">Delete</button>`

            resourceBoard.classList.remove('hidden');
            resourceBoard.appendChild(resourceCard);

            resourceCard.querySelector('.delete-button-resource-card').addEventListener('click', function() {
                resourceBoard.removeChild(resourceCard);
                if (resourceBoard.children.length === 1) {
                    resourceBoard.classList.add('hidden');
                }
            }
        )
    } else if (projectCreate == 'crochet' && materialsCreate == 'satin' && ideaCreate == 'suggestions' ) {
            const ideaBoard = document.getElementById('idea-board');
            const ideaCard = document.createElement('div');
            ideaCard.className = 'idea-card';
            ideaCard.innerHTML = `<h3>Project idea</h3><p><b>Project:</b> Satin Ribbon Flower Brooch<p><b>Description:</b> A beautiful brooch made from satin ribbon to adorn clothing or accessories.</p><b>Tools:</b> Crochet hook, satin yarn, brooch pin.</p><p><b>Difficulty:</b> Easy</p><p><b>Estimated Time:</b> 2-3 hours</p><button class="delete-button-idea-card">Delete</button>`;
            document.getElementById('idea-board').classList.remove('hidden');
            ideaBoard.appendChild(ideaCard);

            ideaCard.querySelector('.delete-button-idea-card').addEventListener('click', function() {
                ideaBoard.removeChild(ideaCard);
                if (ideaBoard.children.length === 1) {
                    ideaBoard.classList.add('hidden');
                }
            });
            
            const resourceBoard = document.getElementById('resource-board');

            const resourceCard = document.createElement('div');
            resourceCard.className = 'resource-card';
            resourceCard.innerHTML = `<h3>Raverly</h3><p><a href="https://www.ravelry.com">Raverly</a> is a community site, an organizational tool, and a yarn & pattern database for knitters and crocheters.</p><p><h3>LoveCrafts</h3></p><p>You can find a wide variety of free crochet and knitting patterns at <a href="https://www.lovecrafts.com/en-gb/l/crochet/crochet-patterns/free-crochet-patterns">LoveCrafts</a></p><p><h3>Wool and the Gang</h3></p><p><a href="https://www.woolandthegang.com/en/free-patterns?utf8=%E2%9C%93&filters%5B5%5D%5B%5D=42&filters%5B5%5D%5B%5D=55&filters%5B5%5D%5B%5D=39&filters%5B5%5D%5B%5D=54&filters%5B5%5D%5B%5D=43&filters%5B5%5D%5B%5D=47&filters%5B7%5D%5B%5D=61&filters%5B7%5D%5B%5D=62">Wool and the Gang</a> provides a wider range of free crochet and knitting patterns suitable for different experience levels - if you are looking specifically for clothing items, it can be a great place to start.</p><button class="delete-button-resource-card">Delete</button>`

            resourceBoard.classList.remove('hidden');
            resourceBoard.appendChild(resourceCard);

            resourceCard.querySelector('.delete-button-resource-card').addEventListener('click', function() {
                resourceBoard.removeChild(resourceCard);
                if (resourceBoard.children.length === 1) {
                    resourceBoard.classList.add('hidden');
                }
            }
        )
    } else if (projectCreate == 'sewing' && materialsCreate == 'cotton' && ideaCreate == 'accessories' ) {
        const ideaBoard = document.getElementById('idea-board');
        const ideaCard = document.createElement('div');
        ideaCard.className = 'idea-card';
        ideaCard.innerHTML = `<h3>Project idea</h3><p><b>Project:</b> Cotton Tote Bag<p><b>Description:</b> A versatile and eco-friendly tote bag.</p><b>Tools:</b> Sewing machine, cotton fabric, scissors, thread.</p><p><b>Difficulty:</b> Easy</p><p><b>Estimated Time:</b> 2-3 hours</p><button class="delete-button-idea-card">Delete</button>`;
        document.getElementById('idea-board').classList.remove('hidden');
        ideaBoard.appendChild(ideaCard);
    
        ideaCard.querySelector('.delete-button-idea-card').addEventListener('click', function() {
            ideaBoard.removeChild(ideaCard);
            if (ideaBoard.children.length === 1) {
                ideaBoard.classList.add('hidden');
            }
        });
        
        const resourceBoard = document.getElementById('resource-board');
    
                const resourceCard = document.createElement('div');
                resourceCard.className = 'resource-card';
                resourceCard.innerHTML = `<h3>Patternmker Pro</h3><p><a href="https://patternmakerpro.com/catalog">Patternmaker pro</a> is a free sewing pattern catalog, with options suitable for different sizes and levels of expertise.</p><p><h3>FreeSewing Designs</h3></p><p><a href="https://freesewing.org/designs">FreeSewing Designs</a> is a catalog of free sewing patterns designed and shared by the Community.</p><p><a href="https://www.dmc.com/US/en/patterns/free-patterns-by-craft/embroidery?products_en_production%5BsortBy%5D=products_US_en_price_ascending_production">DMC</a> DMC is a leading global needlecraft company with a large set of of free embroidery patterns.</p><p><a href="https://www.lovecrafts.com/en-gb/l/cross-stitch-and-embroidery/cross-stitch-and-embroidery-patterns/free-embroidery-patterns">LoveCrafts</a> has a wonderful selection of fun and free embroidery patterns to download, learn embroidery technichs and get inspired for your next project. </p><button class="delete-button-resource-card">Delete</button>`
    
                resourceBoard.classList.remove('hidden');
                resourceBoard.appendChild(resourceCard);
    
                resourceCard.querySelector('.delete-button-resource-card').addEventListener('click', function() {
                    resourceBoard.removeChild(resourceCard);
                    if (resourceBoard.children.length === 1) {
                            resourceBoard.classList.add('hidden');
                    }
                }
            )
    } else if (projectCreate == 'sewing' && materialsCreate == 'cotton' && ideaCreate == 'clothing-items' ) {
        const ideaBoard = document.getElementById('idea-board');
        const ideaCard = document.createElement('div');
        ideaCard.className = 'idea-card';
        ideaCard.innerHTML = `<h3>Project idea</h3><p><b>Project:</b> Wool Skirt<p><b>Description:</b> A warm, stylish skirt perfect for colder weather.</p><b>Tools:</b> Sewing machine, wool fabric, scissors, thread, zipper.</p><p><b>Difficulty:</b> Moderate</p><p><b>Estimated Time:</b> 8-10 hours</p><button class="delete-button-idea-card">Delete</button>`;
        document.getElementById('idea-board').classList.remove('hidden');
        ideaBoard.appendChild(ideaCard);
    
        ideaCard.querySelector('.delete-button-idea-card').addEventListener('click', function() {
            ideaBoard.removeChild(ideaCard);
            if (ideaBoard.children.length === 1) {
                ideaBoard.classList.add('hidden');
            }
        });
        
        const resourceBoard = document.getElementById('resource-board');
    
                    const resourceCard = document.createElement('div');
                    resourceCard.className = 'resource-card';
                    resourceCard.innerHTML = `<h3>Patternmker Pro</h3><p><a href="https://patternmakerpro.com/catalog">Patternmaker pro</a> is a free sewing pattern catalog, with options suitable for different sizes and levels of expertise.</p><p><h3>FreeSewing Designs</h3></p><p><a href="https://freesewing.org/designs">FreeSewing Designs</a> is a catalog of free sewing patterns designed and shared by the Community.</p><p><a href="https://www.dmc.com/US/en/patterns/free-patterns-by-craft/embroidery?products_en_production%5BsortBy%5D=products_US_en_price_ascending_production">DMC</a> DMC is a leading global needlecraft company with a large set of of free embroidery patterns.</p><p><a href="https://www.lovecrafts.com/en-gb/l/cross-stitch-and-embroidery/cross-stitch-and-embroidery-patterns/free-embroidery-patterns">LoveCrafts</a> has a wonderful selection of fun and free embroidery patterns to download, learn embroidery technichs and get inspired for your next project. </p><button class="delete-button-resource-card">Delete</button>`
    
                    resourceBoard.classList.remove('hidden');
                    resourceBoard.appendChild(resourceCard);
    
                    resourceCard.querySelector('.delete-button-resource-card').addEventListener('click', function() {
                        resourceBoard.removeChild(resourceCard);
                        if (resourceBoard.children.length === 1) {
                            resourceBoard.classList.add('hidden');
                        }
                    }
                )
    } else if (projectCreate == 'sewing' && materialsCreate == 'cotton' && ideaCreate == 'household-items' ) {
        const ideaBoard = document.getElementById('idea-board');
        const ideaCard = document.createElement('div');
        ideaCard.className = 'idea-card';
        ideaCard.innerHTML = `<h3>Project idea</h3><p><b>Project:</b> Cotton Pillowcases<p><b>Description:</b> Soft and comfortable pillowcases for your bed.</p><b>Tools:</b> Sewing machine, cotton fabric, scissors, thread.</p><p><b>Difficulty:</b> Easy</p><p><b>Estimated Time:</b> 2-3 hours per pillowcase</p><button class="delete-button-idea-card">Delete</button>`;
        document.getElementById('idea-board').classList.remove('hidden');
        ideaBoard.appendChild(ideaCard);
    
        ideaCard.querySelector('.delete-button-idea-card').addEventListener('click', function() {
            ideaBoard.removeChild(ideaCard);
            if (ideaBoard.children.length === 1) {
                ideaBoard.classList.add('hidden');
            }
        });
        
        const resourceBoard = document.getElementById('resource-board');
    
                    const resourceCard = document.createElement('div');
                    resourceCard.className = 'resource-card';
                    resourceCard.innerHTML = `<h3>Patternmker Pro</h3><p><a href="https://patternmakerpro.com/catalog">Patternmaker pro</a> is a free sewing pattern catalog, with options suitable for different sizes and levels of expertise.</p><p><h3>FreeSewing Designs</h3></p><p><a href="https://freesewing.org/designs">FreeSewing Designs</a> is a catalog of free sewing patterns designed and shared by the Community.</p><p><a href="https://www.dmc.com/US/en/patterns/free-patterns-by-craft/embroidery?products_en_production%5BsortBy%5D=products_US_en_price_ascending_production">DMC</a> DMC is a leading global needlecraft company with a large set of of free embroidery patterns.</p><p><a href="https://www.lovecrafts.com/en-gb/l/cross-stitch-and-embroidery/cross-stitch-and-embroidery-patterns/free-embroidery-patterns">LoveCrafts</a> has a wonderful selection of fun and free embroidery patterns to download, learn embroidery technichs and get inspired for your next project. </p><button class="delete-button-resource-card">Delete</button>`
    
                    resourceBoard.classList.remove('hidden');
                    resourceBoard.appendChild(resourceCard);
    
                    resourceCard.querySelector('.delete-button-resource-card').addEventListener('click', function() {
                        resourceBoard.removeChild(resourceCard);
                        if (resourceBoard.children.length === 1) {
                            resourceBoard.classList.add('hidden');
                        }
                    }
                )
    } else if (projectCreate == 'sewing' && materialsCreate == 'cotton' && ideaCreate == 'suggestions' ) {
        const ideaBoard = document.getElementById('idea-board');
        const ideaCard = document.createElement('div');
        ideaCard.className = 'idea-card';
        ideaCard.innerHTML = `<h3>Project idea</h3><p><b>Project:</b> Wool Felted Organizer<p><b>Description:</b> A handy felted organizer for your desk or craft supplies.</p><b>Tools:</b> Sewing machine, wool felt, scissors, thread.</p><p><b>Difficulty:</b> Moderate</p><p><b>Estimated Time:</b> 4-5 hours</p><button class="delete-button-idea-card">Delete</button>`;
        document.getElementById('idea-board').classList.remove('hidden');
        ideaBoard.appendChild(ideaCard);
    
        ideaCard.querySelector('.delete-button-idea-card').addEventListener('click', function() {
            ideaBoard.removeChild(ideaCard);
            if (ideaBoard.children.length === 1) {
                ideaBoard.classList.add('hidden');
            }
        });
        
        const resourceBoard = document.getElementById('resource-board');
    
                    const resourceCard = document.createElement('div');
                    resourceCard.className = 'resource-card';
                    resourceCard.innerHTML = `<h3>Patternmker Pro</h3><p><a href="https://patternmakerpro.com/catalog">Patternmaker pro</a> is a free sewing pattern catalog, with options suitable for different sizes and levels of expertise.</p><p><h3>FreeSewing Designs</h3></p><p><a href="https://freesewing.org/designs">FreeSewing Designs</a> is a catalog of free sewing patterns designed and shared by the Community.</p><p><a href="https://www.dmc.com/US/en/patterns/free-patterns-by-craft/embroidery?products_en_production%5BsortBy%5D=products_US_en_price_ascending_production">DMC</a> DMC is a leading global needlecraft company with a large set of of free embroidery patterns.</p><p><a href="https://www.lovecrafts.com/en-gb/l/cross-stitch-and-embroidery/cross-stitch-and-embroidery-patterns/free-embroidery-patterns">LoveCrafts</a> has a wonderful selection of fun and free embroidery patterns to download, learn embroidery technichs and get inspired for your next project. </p><button class="delete-button-resource-card">Delete</button>`
    
                    resourceBoard.classList.remove('hidden');
                    resourceBoard.appendChild(resourceCard);
    
                    resourceCard.querySelector('.delete-button-resource-card').addEventListener('click', function() {
                        resourceBoard.removeChild(resourceCard);
                        if (resourceBoard.children.length === 1) {
                            resourceBoard.classList.add('hidden');
                        }
                    }
                )
    } else if (projectCreate == 'sewing' && materialsCreate == 'linen' && ideaCreate == 'accessories' ) {
        const ideaBoard = document.getElementById('idea-board');
        const ideaCard = document.createElement('div');
        ideaCard.className = 'idea-card';
        ideaCard.innerHTML = `<h3>Project idea</h3><p><b>Project:</b> Linen Apron<p><b>Description:</b> A durable and stylish apron for cooking or crafting.</p><b>Tools:</b> Sewing machine, linen fabric, scissors, thread.</p><p><b>Difficulty:</b> Moderate</p><p><b>Estimated Time:</b> 4-5 hours</p><button class="delete-button-idea-card">Delete</button>`;
        document.getElementById('idea-board').classList.remove('hidden');
        ideaBoard.appendChild(ideaCard);
    
        ideaCard.querySelector('.delete-button-idea-card').addEventListener('click', function() {
            ideaBoard.removeChild(ideaCard);
            if (ideaBoard.children.length === 1) {
                ideaBoard.classList.add('hidden');
            }
        });
        
        const resourceBoard = document.getElementById('resource-board');
    
                    const resourceCard = document.createElement('div');
                    resourceCard.className = 'resource-card';
                    resourceCard.innerHTML = `<h3>Patternmker Pro</h3><p><a href="https://patternmakerpro.com/catalog">Patternmaker pro</a> is a free sewing pattern catalog, with options suitable for different sizes and levels of expertise.</p><p><h3>FreeSewing Designs</h3></p><p><a href="https://freesewing.org/designs">FreeSewing Designs</a> is a catalog of free sewing patterns designed and shared by the Community.</p><p><a href="https://www.dmc.com/US/en/patterns/free-patterns-by-craft/embroidery?products_en_production%5BsortBy%5D=products_US_en_price_ascending_production">DMC</a> DMC is a leading global needlecraft company with a large set of of free embroidery patterns.</p><p><a href="https://www.lovecrafts.com/en-gb/l/cross-stitch-and-embroidery/cross-stitch-and-embroidery-patterns/free-embroidery-patterns">LoveCrafts</a> has a wonderful selection of fun and free embroidery patterns to download, learn embroidery technichs and get inspired for your next project. </p><button class="delete-button-resource-card">Delete</button>`
    
                    resourceBoard.classList.remove('hidden');
                    resourceBoard.appendChild(resourceCard);
    
                    resourceCard.querySelector('.delete-button-resource-card').addEventListener('click', function() {
                        resourceBoard.removeChild(resourceCard);
                        if (resourceBoard.children.length === 1) {
                            resourceBoard.classList.add('hidden');
                        }
                    }
                )
    } else if (projectCreate == 'sewing' && materialsCreate == 'linen' && ideaCreate == 'clothing-items' ) {
        const ideaBoard = document.getElementById('idea-board');
        const ideaCard = document.createElement('div');
        ideaCard.className = 'idea-card';
        ideaCard.innerHTML = `<h3>Project idea</h3><p><b>Project:</b> Linen Dress<p><b>Description:</b> A light and airy dress perfect for summer.</p><b>Tools:</b> Sewing machine, linen fabric, scissors, thread, buttons.</p><p><b>Difficulty:</b> Advanced</p><p><b>Estimated Time:</b> 10-12 hours</p><button class="delete-button-idea-card">Delete</button>`;
        document.getElementById('idea-board').classList.remove('hidden');
        ideaBoard.appendChild(ideaCard);
    
        ideaCard.querySelector('.delete-button-idea-card').addEventListener('click', function() {
            ideaBoard.removeChild(ideaCard);
            if (ideaBoard.children.length === 1) {
                ideaBoard.classList.add('hidden');
            }
        });
        
        const resourceBoard = document.getElementById('resource-board');
    
                    const resourceCard = document.createElement('div');
                    resourceCard.className = 'resource-card';
                    resourceCard.innerHTML = `<h3>Patternmker Pro</h3><p><a href="https://patternmakerpro.com/catalog">Patternmaker pro</a> is a free sewing pattern catalog, with options suitable for different sizes and levels of expertise.</p><p><h3>FreeSewing Designs</h3></p><p><a href="https://freesewing.org/designs">FreeSewing Designs</a> is a catalog of free sewing patterns designed and shared by the Community.</p><p><a href="https://www.dmc.com/US/en/patterns/free-patterns-by-craft/embroidery?products_en_production%5BsortBy%5D=products_US_en_price_ascending_production">DMC</a> DMC is a leading global needlecraft company with a large set of of free embroidery patterns.</p><p><a href="https://www.lovecrafts.com/en-gb/l/cross-stitch-and-embroidery/cross-stitch-and-embroidery-patterns/free-embroidery-patterns">LoveCrafts</a> has a wonderful selection of fun and free embroidery patterns to download, learn embroidery technichs and get inspired for your next project. </p><button class="delete-button-resource-card">Delete</button>`
    
                    resourceBoard.classList.remove('hidden');
                    resourceBoard.appendChild(resourceCard);
    
                    resourceCard.querySelector('.delete-button-resource-card').addEventListener('click', function() {
                        resourceBoard.removeChild(resourceCard);
                        if (resourceBoard.children.length === 1) {
                            resourceBoard.classList.add('hidden');
                        }
                    }
                )
    } else if (projectCreate == 'sewing' && materialsCreate == 'linen' && ideaCreate == 'household-items' ) {
        const ideaBoard = document.getElementById('idea-board');
        const ideaCard = document.createElement('div');
        ideaCard.className = 'idea-card';
        ideaCard.innerHTML = `<h3>Project idea</h3><p><b>Project:</b> Linen Napkins<p><b>Description:</b> Elegant napkins for a special dining experience.</p><b>Tools:</b> Sewing machine, linen fabric, scissors, thread.</p><p><b>Difficulty:</b> Easy</p><p><b>Estimated Time:</b> 2-3 hours</p><button class="delete-button-idea-card">Delete</button>`;
        document.getElementById('idea-board').classList.remove('hidden');
        ideaBoard.appendChild(ideaCard);
    
        ideaCard.querySelector('.delete-button-idea-card').addEventListener('click', function() {
            ideaBoard.removeChild(ideaCard);
            if (ideaBoard.children.length === 1) {
                ideaBoard.classList.add('hidden');
            }
        });
        
        const resourceBoard = document.getElementById('resource-board');
    
                    const resourceCard = document.createElement('div');
                    resourceCard.className = 'resource-card';
                    resourceCard.innerHTML = `<h3>Patternmker Pro</h3><p><a href="https://patternmakerpro.com/catalog">Patternmaker pro</a> is a free sewing pattern catalog, with options suitable for different sizes and levels of expertise.</p><p><h3>FreeSewing Designs</h3></p><p><a href="https://freesewing.org/designs">FreeSewing Designs</a> is a catalog of free sewing patterns designed and shared by the Community.</p><p><a href="https://www.dmc.com/US/en/patterns/free-patterns-by-craft/embroidery?products_en_production%5BsortBy%5D=products_US_en_price_ascending_production">DMC</a> DMC is a leading global needlecraft company with a large set of of free embroidery patterns.</p><p><a href="https://www.lovecrafts.com/en-gb/l/cross-stitch-and-embroidery/cross-stitch-and-embroidery-patterns/free-embroidery-patterns">LoveCrafts</a> has a wonderful selection of fun and free embroidery patterns to download, learn embroidery technichs and get inspired for your next project. </p><button class="delete-button-resource-card">Delete</button>`
    
                    resourceBoard.classList.remove('hidden');
                    resourceBoard.appendChild(resourceCard);
    
                    resourceCard.querySelector('.delete-button-resource-card').addEventListener('click', function() {
                        resourceBoard.removeChild(resourceCard);
                        if (resourceBoard.children.length === 1) {
                            resourceBoard.classList.add('hidden');
                        }
                    }
                )
    } else if (projectCreate == 'sewing' && materialsCreate == 'linen' && ideaCreate == 'suggestions' ) {
        const ideaBoard = document.getElementById('idea-board');
        const ideaCard = document.createElement('div');
        ideaCard.className = 'idea-card';
        ideaCard.innerHTML = `<h3>Project idea</h3><p><b>Project:</b> Linen Wall Hanging with Embroidery<p><b>Description:</b> A decorative wall hanging featuring embroidered designs.</p><b>Tools:</b> Embroidery hoop, linen fabric, embroidery thread, needle.</p><p><b>Difficulty:</b> Moderate</p><p><b>Estimated Time:</b> 6-8 hours</p><button class="delete-button-idea-card">Delete</button>`;
        document.getElementById('idea-board').classList.remove('hidden');
        ideaBoard.appendChild(ideaCard);
    
        ideaCard.querySelector('.delete-button-idea-card').addEventListener('click', function() {
            ideaBoard.removeChild(ideaCard);
            if (ideaBoard.children.length === 1) {
                ideaBoard.classList.add('hidden');
            }
        });
        
        const resourceBoard = document.getElementById('resource-board');
    
                    const resourceCard = document.createElement('div');
                    resourceCard.className = 'resource-card';
                    resourceCard.innerHTML = `<h3>Patternmker Pro</h3><p><a href="https://patternmakerpro.com/catalog">Patternmaker pro</a> is a free sewing pattern catalog, with options suitable for different sizes and levels of expertise.</p><p><h3>FreeSewing Designs</h3></p><p><a href="https://freesewing.org/designs">FreeSewing Designs</a> is a catalog of free sewing patterns designed and shared by the Community.</p><p><a href="https://www.dmc.com/US/en/patterns/free-patterns-by-craft/embroidery?products_en_production%5BsortBy%5D=products_US_en_price_ascending_production">DMC</a> DMC is a leading global needlecraft company with a large set of of free embroidery patterns.</p><p><a href="https://www.lovecrafts.com/en-gb/l/cross-stitch-and-embroidery/cross-stitch-and-embroidery-patterns/free-embroidery-patterns">LoveCrafts</a> has a wonderful selection of fun and free embroidery patterns to download, learn embroidery technichs and get inspired for your next project. </p><button class="delete-button-resource-card">Delete</button>`
    
                    resourceBoard.classList.remove('hidden');
                    resourceBoard.appendChild(resourceCard);
    
                    resourceCard.querySelector('.delete-button-resource-card').addEventListener('click', function() {
                        resourceBoard.removeChild(resourceCard);
                        if (resourceBoard.children.length === 1) {
                            resourceBoard.classList.add('hidden');
                        }
                    }
                )
    } else if (projectCreate == 'sewing' && materialsCreate == 'satin' && ideaCreate == 'accessories' ) {
        const ideaBoard = document.getElementById('idea-board');
        const ideaCard = document.createElement('div');
        ideaCard.className = 'idea-card';
        ideaCard.innerHTML = `<h3>Project idea</h3><p><b>Project:</b> Satin Scrunchies<p><b>Description:</b> Stylish and gentle on your hair, satin scrunchies are perfect accessories.</p><b>Tools:</b> Sewing machine, satin fabric, scissors, thread, elastic.</p><p><b>Difficulty:</b> Easy</p><p><b>Estimated Time:</b> 1-2 hours</p><button class="delete-button-idea-card">Delete</button>`;
        document.getElementById('idea-board').classList.remove('hidden');
        ideaBoard.appendChild(ideaCard);
    
        ideaCard.querySelector('.delete-button-idea-card').addEventListener('click', function() {
            ideaBoard.removeChild(ideaCard);
            if (ideaBoard.children.length === 1) {
                ideaBoard.classList.add('hidden');
            }
        });
        
        const resourceBoard = document.getElementById('resource-board');
    
                    const resourceCard = document.createElement('div');
                    resourceCard.className = 'resource-card';
                    resourceCard.innerHTML = `<h3>Patternmker Pro</h3><p><a href="https://patternmakerpro.com/catalog">Patternmaker pro</a> is a free sewing pattern catalog, with options suitable for different sizes and levels of expertise.</p><p><h3>FreeSewing Designs</h3></p><p><a href="https://freesewing.org/designs">FreeSewing Designs</a> is a catalog of free sewing patterns designed and shared by the Community.</p><p><a href="https://www.dmc.com/US/en/patterns/free-patterns-by-craft/embroidery?products_en_production%5BsortBy%5D=products_US_en_price_ascending_production">DMC</a> DMC is a leading global needlecraft company with a large set of of free embroidery patterns.</p><p><a href="https://www.lovecrafts.com/en-gb/l/cross-stitch-and-embroidery/cross-stitch-and-embroidery-patterns/free-embroidery-patterns">LoveCrafts</a> has a wonderful selection of fun and free embroidery patterns to download, learn embroidery technichs and get inspired for your next project. </p><button class="delete-button-resource-card">Delete</button>`
    
                    resourceBoard.classList.remove('hidden');
                    resourceBoard.appendChild(resourceCard);
    
                    resourceCard.querySelector('.delete-button-resource-card').addEventListener('click', function() {
                        resourceBoard.removeChild(resourceCard);
                        if (resourceBoard.children.length === 1) {
                            resourceBoard.classList.add('hidden');
                        }
                    }
                )
    } else if (projectCreate == 'sewing' && materialsCreate == 'satin' && ideaCreate == 'clothing-items' ) {
        const ideaBoard = document.getElementById('idea-board');
        const ideaCard = document.createElement('div');
        ideaCard.className = 'idea-card';
        ideaCard.innerHTML = `<h3>Project idea</h3><p><b>Project:</b> Satin Blouse<p><b>Description:</b> A luxurious and elegant blouse for special occasions.</p><b>Tools:</b> Sewing machine, satin fabric, scissors, thread, buttons.</p><p><b>Difficulty:</b> Advanced</p><p><b>Estimated Time:</b> 12-15 hours</p><button class="delete-button-idea-card">Delete</button>`;
        document.getElementById('idea-board').classList.remove('hidden');
        ideaBoard.appendChild(ideaCard);
    
        ideaCard.querySelector('.delete-button-idea-card').addEventListener('click', function() {
            ideaBoard.removeChild(ideaCard);
            if (ideaBoard.children.length === 1) {
                ideaBoard.classList.add('hidden');
            }
        });
        
        const resourceBoard = document.getElementById('resource-board');
    
                    const resourceCard = document.createElement('div');
                    resourceCard.className = 'resource-card';
                    resourceCard.innerHTML = `<h3>Patternmker Pro</h3><p><a href="https://patternmakerpro.com/catalog">Patternmaker pro</a> is a free sewing pattern catalog, with options suitable for different sizes and levels of expertise.</p><p><h3>FreeSewing Designs</h3></p><p><a href="https://freesewing.org/designs">FreeSewing Designs</a> is a catalog of free sewing patterns designed and shared by the Community.</p><p><a href="https://www.dmc.com/US/en/patterns/free-patterns-by-craft/embroidery?products_en_production%5BsortBy%5D=products_US_en_price_ascending_production">DMC</a> DMC is a leading global needlecraft company with a large set of of free embroidery patterns.</p><p><a href="https://www.lovecrafts.com/en-gb/l/cross-stitch-and-embroidery/cross-stitch-and-embroidery-patterns/free-embroidery-patterns">LoveCrafts</a> has a wonderful selection of fun and free embroidery patterns to download, learn embroidery technichs and get inspired for your next project. </p><button class="delete-button-resource-card">Delete</button>`
    
                    resourceBoard.classList.remove('hidden');
                    resourceBoard.appendChild(resourceCard);
    
                    resourceCard.querySelector('.delete-button-resource-card').addEventListener('click', function() {
                        resourceBoard.removeChild(resourceCard);
                        if (resourceBoard.children.length === 1) {
                            resourceBoard.classList.add('hidden');
                        }
                    }
                )
    } else if (projectCreate == 'sewing' && materialsCreate == 'satin' && ideaCreate == 'household-items' ) {
        const ideaBoard = document.getElementById('idea-board');
        const ideaCard = document.createElement('div');
        ideaCard.className = 'idea-card';
        ideaCard.innerHTML = `<h3>Project idea</h3><p><b>Project:</b> Satin Table Runner<p><b>Description:</b> A shiny and elegant table runner to enhance your dining table.</p><b>Tools:</b> Sewing machine, satin fabric, scissors, thread.</p><p><b>Difficulty:</b> Moderate</p><p><b>Estimated Time:</b> 3-4 hours</p><button class="delete-button-idea-card">Delete</button>`;
        document.getElementById('idea-board').classList.remove('hidden');
        ideaBoard.appendChild(ideaCard);
    
        ideaCard.querySelector('.delete-button-idea-card').addEventListener('click', function() {
            ideaBoard.removeChild(ideaCard);
            if (ideaBoard.children.length === 1) {
                ideaBoard.classList.add('hidden');
            }
        });
        
        const resourceBoard = document.getElementById('resource-board');
    
                    const resourceCard = document.createElement('div');
                    resourceCard.className = 'resource-card';
                    resourceCard.innerHTML = `<h3>Patternmker Pro</h3><p><a href="https://patternmakerpro.com/catalog">Patternmaker pro</a> is a free sewing pattern catalog, with options suitable for different sizes and levels of expertise.</p><p><h3>FreeSewing Designs</h3></p><p><a href="https://freesewing.org/designs">FreeSewing Designs</a> is a catalog of free sewing patterns designed and shared by the Community.</p><p><a href="https://www.dmc.com/US/en/patterns/free-patterns-by-craft/embroidery?products_en_production%5BsortBy%5D=products_US_en_price_ascending_production">DMC</a> DMC is a leading global needlecraft company with a large set of of free embroidery patterns.</p><p><a href="https://www.lovecrafts.com/en-gb/l/cross-stitch-and-embroidery/cross-stitch-and-embroidery-patterns/free-embroidery-patterns">LoveCrafts</a> has a wonderful selection of fun and free embroidery patterns to download, learn embroidery technichs and get inspired for your next project. </p><button class="delete-button-resource-card">Delete</button>`
    
                    resourceBoard.classList.remove('hidden');
                    resourceBoard.appendChild(resourceCard);
    
                    resourceCard.querySelector('.delete-button-resource-card').addEventListener('click', function() {
                        resourceBoard.removeChild(resourceCard);
                        if (resourceBoard.children.length === 1) {
                            resourceBoard.classList.add('hidden');
                        }
                    }
                )
    } else if (projectCreate == 'sewing' && materialsCreate == 'satin' && ideaCreate == 'suggestions' ) {
        const ideaBoard = document.getElementById('idea-board');
        const ideaCard = document.createElement('div');
        ideaCard.className = 'idea-card';
        ideaCard.innerHTML = `<h3>Project idea</h3><p><b>Project:</b> Satin Ribbon Embroidered Wall Art<p><b>Description:</b> A unique and decorative piece of wall art made with satin ribbon embroidery.</p><b>Tools:</b> Embroidery hoop, satin ribbon, embroidery thread, needle, canvas.</p><p><b>Difficulty:</b> Moderate</p><p><b>Estimated Time:</b> 5-6 hours</p><button class="delete-button-idea-card">Delete</button>`;
        document.getElementById('idea-board').classList.remove('hidden');
        ideaBoard.appendChild(ideaCard);
    
        ideaCard.querySelector('.delete-button-idea-card').addEventListener('click', function() {
            ideaBoard.removeChild(ideaCard);
            if (ideaBoard.children.length === 1) {
                ideaBoard.classList.add('hidden');
            }
        });
        
        const resourceBoard = document.getElementById('resource-board');
    
                    const resourceCard = document.createElement('div');
                    resourceCard.className = 'resource-card';
                    resourceCard.innerHTML = `<h3>Patternmker Pro</h3><p><a href="https://patternmakerpro.com/catalog">Patternmaker pro</a> is a free sewing pattern catalog, with options suitable for different sizes and levels of expertise.</p><p><h3>FreeSewing Designs</h3></p><p><a href="https://freesewing.org/designs">FreeSewing Designs</a> is a catalog of free sewing patterns designed and shared by the Community.</p><p><a href="https://www.dmc.com/US/en/patterns/free-patterns-by-craft/embroidery?products_en_production%5BsortBy%5D=products_US_en_price_ascending_production">DMC</a> DMC is a leading global needlecraft company with a large set of of free embroidery patterns.</p><p><a href="https://www.lovecrafts.com/en-gb/l/cross-stitch-and-embroidery/cross-stitch-and-embroidery-patterns/free-embroidery-patterns">LoveCrafts</a> has a wonderful selection of fun and free embroidery patterns to download, learn embroidery technichs and get inspired for your next project. </p><button class="delete-button-resource-card">Delete</button>`
    
                    resourceBoard.classList.remove('hidden');
                    resourceBoard.appendChild(resourceCard);
    
                    resourceCard.querySelector('.delete-button-resource-card').addEventListener('click', function() {
                        resourceBoard.removeChild(resourceCard);
                        if (resourceBoard.children.length === 1) {
                            resourceBoard.classList.add('hidden');
                        }
                    }
                )
        }
    });
});