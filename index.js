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
        <p class="primary-text">visitor@desktop:<span class="secondary-text">~</span>$</p>
    </div>
        <div class="input-div">
            <input type="text" class="input-field" onblur="this.focus()" autofocus id="input${cmd_no}" onkeypress="inputCmd(event)">
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
                <p>about_me.txt</p>
                <p>experience.txt</p>
                <p>works.txt</p>
                <p>skills.txt</p>
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
            if(cmd[1] == 'experience.txt'){
                let div = document.createElement('div');
                div.className = 'experience-div';
                div.innerHTML = `
                    <h3 class="title-text"> My Experience: </h3>
                    <p> Date(from-to) - Junior Developer at Silicon Hire </p>
                    <p> Date(from-to) - Junior Developer at Vzeal </p>
                    <p> Date(from-to) - Trainee Developer at Vzeal </p>
                    <p> Date(from-to) - Intern at Vzeal </p>
                `;
                document.getElementById('output'+cmd_no).appendChild(div);
            }
            if(cmd[1] == 'works.txt'){
                let div = document.createElement('div');
                div.className = 'works-div';
                div.innerHTML = `
                    <h3 class="title-text"> My works: </h3>
                    <p> Frontend using Vue Js + Bootstrap in Buyraksi.com </p>
                    <p> Backend using Laravel in Buyraksi.com </p>
                    <p> Frontend using Vue Js + SCSS in Meroadda.com </p>
                `;
                document.getElementById('output'+cmd_no).appendChild(div);
            }
            if(cmd[1] == 'skills.txt'){
                let div = document.createElement('div');
                div.className = 'skills-div';
                div.innerHTML = `
                    <h3 class="title-text"> My Skills: </h3>
                    <p> HTML <p>
                    <p> CSS <p>
                    <p> SCSS <p>
                    <p> Javascript <p>
                    <p> VueJs <p>
                    <p> PHP <p>
                    <p> Laravel <p>
                    <p> Python </p>
                    <p> Django </p>
                `;
                document.getElementById('output'+cmd_no).appendChild(div);
            }
            if(cmd[1] != 'skills.txt' && cmd[1] != 'about_me.txt' && cmd[1] != 'experience.txt' && cmd[1] != 'works.txt'){
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
                <p class="primary-text">visitor@desktop:<span class="secondary-text">~</span>$</p>
            </div>
                <div class="input-div">
                    <input type="text" class="input-field" onblur="this.focus()" autofocus id="input${cmd_no}" onkeypress="inputCmd(event)">
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

        add_div();
    }
    
}