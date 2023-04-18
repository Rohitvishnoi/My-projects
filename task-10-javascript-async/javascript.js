let p = fetch('https://gorest.co.in/public/v2/users')
  .then((resp1) => {
    return resp1.json();
  })
  .then((data) => {
    console.log(data);
    let tabledata = '';
    data.forEach((values) => {
      tabledata += `<tr>
      <td class="fs-4 fw-dark">${values.name}</td>
      <td>
      <button type="button" class="btn btn-light" onclick=cli() data-bs-toggle="modal" data-bs-target="#staticBackdrop-${values.id}">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-eye" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>
            <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6"></path>
          </svg>
        </button>
        <div class="modal fade" id="staticBackdrop-${values.id}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                          <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h1 class="modal-title fs-5" id="staticBackdropLabel">Description</h1>
                              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body mt-5">
                              <table style="2px solid black;" class="table-success text-start table-bordered">
                                <tr class="table-success">
                                  <td style="padding: 5px;" class="table-success fw-bold">Name </td>
                                  <td style="padding: 5px;" class="table-success">${values.name}</td>
                                </tr>
                                <tr class="table-success">
                                  <td style="padding: 5px;" class="table-success fw-bold">Id </td>
                                  <td style="padding: 5px;" class="table-success">${values.id}</td>
                                </tr>
                                <tr class="table-success">
                                  <td style="padding: 5px;" class="table-success fw-bold">Email </td>
                                  <td style="padding: 5px;" class="table-success">${values.email}</td>
                                </tr>
                                <tr class="table-success">
                                  <td style="padding: 5px;" class="table-success fw-bold">Gender </td>
                                  <td style="padding: 5px;" class="table-success">${values.gender}</td>
                                </tr>
                                <tr class="table-success">
                                  <td style="padding: 5px;" class="table-success fw-bold">Status </td>
                                  <td style="padding: 5px;" class="table-success">${values.status}</td>
                                </tr>
                              </table>
                            </div>
                            <div class="modal-footer">
                              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                          </div>
                        </div>
                      </div>
      </td>
    </tr>`;
    })
    let container = document.getElementById('conn').querySelector('.tablebody');
    container.innerHTML = tabledata;

  });
function show_credentials() {
  alert('I am here');
}