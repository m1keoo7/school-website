import content from "./api";

const box = document.querySelector("#custom_box");
const nameContent = box.dataset.name_content;
const inputDataName = `${nameContent}Content`;

const inputData = content[inputDataName][inputDataName];

if (Array.isArray(inputData)) {
  const galleryItemTemplates = inputData.map(
    (item) =>
      `<div class="col">
      <div class="card shadow-sm">
        <img src=${item.path} width="100%" height="100%" alt="image"/>
        <div class="card-body">
          <p class="card-text">${item.title}</p>
          <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
              <button type="button" class="btn btn-sm btn-primary">Просмотр</button>
              
            </div>
          </div>
        </div>
      </div>
    </div>`,
  );

  box.insertAdjacentHTML("beforeend", galleryItemTemplates.join(""));
}
