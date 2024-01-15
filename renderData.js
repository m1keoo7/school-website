import content from "./api/index.js";

const box = document.querySelector("#custom_box");
const nameContent = box.dataset.name_content;
const inputDataName = `${nameContent}Content`;

const inputData = content[inputDataName][inputDataName];

if (Array.isArray(inputData)) {
  const galleryItemTemplates = inputData.map((item) => {
    const titleContent = item.title
      ? `<p class="card-text">${item.title}</p>`
      : "";
    return `<div class="col">
      <div class="card shadow-sm">
        <img src=${item.path} width="100%" height="100%" alt="image"/>
        <div class="card-body">${titleContent}
          <div class="d-flex justify-content-center align-items-center">
              <button type="button" class="btn btn-sm btn-primary w-75">Просмотр</button>
          </div>
        </div>
      </div>
    </div>`;
  });

  box.insertAdjacentHTML("beforeend", galleryItemTemplates.join(""));
}
