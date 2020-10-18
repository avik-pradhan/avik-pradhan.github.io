var cmd_no = 1;

function add_div() {
    let input = document.getElementById("input"+cmd_no);
    input.disabled = true;
    let container = document.getElementById("main");
    cmd_no++;
    const div = document.createElement('div');
    div.className = 'command-div';
    div.innerHTML = `
    <div class="command-line">
        <p class="primary-text">guest@avik:<span class="secondary-text">~</span>$</p>
        <input type="text" class="input-field" onblur="this.focus()" autofocus id="input${cmd_no}" onkeypress="inputCmd(event)">
    </div>
        <div class="input-div">
        <div id="output${cmd_no}"></div>
    </div>
    `;
    container.appendChild(div);
    document.getElementById('input'+cmd_no).focus();
}


function inputCmd(event){
    if(event.keyCode == 13){
        let input_cmd = document.getElementById('input'+cmd_no).value.toLowerCase();
        let cmd = input_cmd.split(' ');

        // for listing files
        if(cmd == 'ls'){
            let div = document.createElement('div');
            div.className = 'list-div';
            div.innerHTML = `
                <p>skills.txt</p>
                <p>portfolio.txt</p>
                <p>about_me.txt</p>
            `;
            document.getElementById('output'+cmd_no).appendChild(div);
        }        

        // displaying file contents
        if(cmd[0] == 'cat'){
            if(cmd[1] == 'about_me.txt'){
                let div = document.createElement('div');
                div.className = 'about-div';
                div.innerHTML = `
                    <h3 class="title-text"> About Me : </h3>
                    <p> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." </p>
                `;
                document.getElementById('output'+cmd_no).appendChild(div);
            }
            if(cmd[1] == 'portfolio.txt'){
                let div = document.createElement('div');
                div.className = 'portfolio-div';
                div.innerHTML = `
                    <h3 class="title-text"> My Portfolio: </h3>
                    <table>
                        <tr>
                            <td>
                                <p>Currently</p>
                            </td>
                            <td>
                                <p>Working as junior developer at SiliconHire.</p>
                                <p>Responsible for creating REST Apis using Django Restframework.</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>2019-11-1</p>
                                <p>to</p>
                                <p>2020-7-16</p>
                            </td>
                            <td>
                                <p>Worked as junior developer in Vzeal.</p>
                                <p>Created REST APIs for mobile app and front end for buyraksi.com.</p>
                                <p>Created front end using HTML, SCSS, VueJs for meroadda.com</p>
                                <p>Implemented TDD approach.</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>2019-04-01</p>
                                <p>to</p>
                                <p>2019-10-31</p>
                            </td>
                            <td>
                                <p>Worked as trainee developer in Vzeal.</p>
                                <p>Created a CMS using Laravel for backend and Vue JS , Bootstrap for frontend.</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>2019-01-01</p>
                                <p>to</p>
                                <p>2019-03-30</p>
                                
                            </td>
                            <td>
                                <p>Worked as intern in vzeal</p>
                            </td>
                        </tr>
                    </table>
                `;
                document.getElementById('output'+cmd_no).appendChild(div);
            }
            if(cmd[1] == 'skills.txt'){
                let div = document.createElement('div');
                div.className = 'skills-div';
                div.innerHTML = `
                    <h3 class="title-text"> My Skills: </h3>
                    <div class="skills">
                        <div>
                            <h4>Front End</h4>
                            <p>HTML5</p>
                            <p>CSS</p>
                            <p>Javascript</p>
                            <p>Vue JS</p>
                            <p>Vuex</p>
                            <p>SCSS</p>
                            <p>Jquery</p>
                            <p>Bootstrap</p>
                        </div>
                        <div>
                            <h4>Back End</h4>
                            <p>PHP</p>
                            <p>Python</p>
                            <p>Laravel</p>
                            <p>Django</p>
                            <p>MySQL</p>
                            <p>PostgreSQL</p>
                        </div>
                        <div>
                            <h4>Tools</h4>
                            <p>Git</p>
                            <p>REST APIs</p>
                            <p>npm</p>
                        </div>
                    </div>
                `;
                document.getElementById('output'+cmd_no).appendChild(div);
            }
            if(cmd[1] != 'skills.txt' && cmd[1] != 'about_me.txt' && cmd[1] != 'portfolio.txt'){
                let div = document.createElement('div');
                div.className = 'list-div';
                div.innerHTML = `
                    <p> No such file. </p>
                `;
                document.getElementById('output'+cmd_no).appendChild(div);
            }
        }

        if(cmd == 'clear'){
            let container = document.getElementById('main');
            while (container.firstChild) {
                container.removeChild(container.firstChild);
            }
            cmd_no++;
            const div = document.createElement('div');
            div.className = 'command-div';
            div.innerHTML = `
            <div class="command-line">
                <p class="primary-text">guest@avik:<span class="secondary-text">~</span>$</p>
                <input type="text" class="input-field" onblur="this.focus()" autofocus id="input${cmd_no}" onkeypress="inputCmd(event)">
            </div>
            <div class="input-div">
                <div id="output${cmd_no}"></div>
            </div>
            `;
            container.appendChild(div);
            document.getElementById('input'+cmd_no).focus();
        }

        if(cmd[0] != 'ls' && cmd[0] != 'cat' && cmd[0] != '' && cmd[0] != 'clear'){
            let div = document.createElement('div');
            div.className = 'list-div';
            div.innerHTML = `
                <p> '${cmd[0]}' is not recognized as internal or external command. </p> 
            `;
            document.getElementById('output'+cmd_no).appendChild(div);
        }
        if(cmd != 'clear'){
            add_div();
        }
    }
    
}

var animate_no = 0;

function display(){
    let elements = document.getElementsByClassName('delay');
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.display = 'block';
    }
    document.getElementById('input'+cmd_no).focus();
}

function typeWriter(){
    let txt = 'cat about_me.txt';
    if(animate_no < txt.length){
        document.getElementById('animate').innerHTML += txt.charAt(animate_no);
        animate_no++;
        setTimeout(typeWriter, 90);
    }
    if(animate_no == txt.length){
        setTimeout(display, 500);
    }
}

function load(){
    setTimeout(typeWriter, 1000);
}