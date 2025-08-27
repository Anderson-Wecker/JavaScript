async function openDirectory() {
    const fileList = document.getElementById("fileList");
    fileList.innerHTML = ""; // limpa a lista

    try {
      // Abre seletor de pastas
      const dirHandle = await window.showDirectoryPicker();

      // Percorre arquivos e pastas dentro
      for await (const [name, handle] of dirHandle.entries()) {
        const li = document.createElement("li");

        if(handle.kind === "file" && name.endsWith('.js'))
        {
            li.innerHTML = '<img src="https://upload.wikimedia.org/wikipedia/commons/8/87/PDF_file_icon.svg" width="10"> ' + name;
            li.classList.add("file");
        } 
        else if(handle.kind === "file" && name.endsWith('.css'))
        {
            li.innerHTML = '<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" width="10"> ' + name;
            li.classList.add("file");
        }
        else if (handle.kind === "file" && name.endsWith('.pdf'))
        {
            li.innerHTML = '<img src="https://upload.wikimedia.org/wikipedia/commons/8/87/PDF_file_icon.svg" width="10"> ' + name;
            li.classList.add("file");
        }
        else if(handle.kind === "file" && name.endsWith('.txt'))
        {
            li.textContent = "📄 " + name;
            li.classList.add("file");
        }
        else if (handle.kind === "directory") 
        {
          li.textContent = "📁 " + name;
          li.classList.add("dir");
        }
        else if(handle.kind === "file" && name.endsWith('.html'))
        {
            li.innerHTML = '<img src="https://pt.wikipedia.org/wiki/HTML5#/media/Ficheiro:HTML5_logo_and_wordmark.svg/2" width="10"> ' + name;
            li.classList.add("file");
        }
        else
        {
            li.textContent = "📄 " + name;
            li.classList.add("file");
        }

        fileList.appendChild(li);
      }
    } catch (err) {
      console.error("Erro ao abrir diretório:", err);
    }
}  

