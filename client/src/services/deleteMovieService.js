export function deleteMovieService(id) {
    return fetch(`http://localhost:4000/movies/${id}`, {
      method: 'DELETE',
    }).then(res => {
      if (!res.ok) throw new Error('Response is NOT ok')
      return res.json()
    }).then(res => {
        //console.log(res)
        return res
    })
  }