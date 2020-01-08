handleDelete = (e, row, idx) => {
  console.log('deleting', e.target);
  const {projId, statusId, addRows} = this.state;
  const taskStatus = {
    status_id: idx.status_id,
    task_id: idx.task_id,
  };
  console.log(idx);
  axios
    .post(`${API_URL}/api/deleteTask`, taskStatus, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    })
    .then(res => {
      console.log(res);
      this.setState(prevState => ({
        addRows: prevState.addRows.filter(
          m => m.task_id !== taskStatus.task_id,
        ),
        editedERow: false,
      }));
    })
    .catch(err => console.log(err));
};
