
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('footnotes').del() // delete footnotes first
    .then(() => knex('papers').del()) // delete papers next

    .then(() => {
      return Promise.all([

        knex('papers').insert({
          title: 'Fooo', author: 'Barr', publisher: 'Random House'
        }, 'id')
        .then(paper => {
          return knex('footnotes').insert([
            {note: 'Lorem', paper_id: paper[0]},
            {note: 'Ipsum', paper_id: paper[0]}
          ])
        })
        .then(() => console.log('Seeding complete!'))
        .catch(error => console.log(`Error seeding data: ${error}`))
        ])
    })
    .catch(error => console.log(`Error seeding data: ${error}`));
};
