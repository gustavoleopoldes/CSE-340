const Util = {}

Util.getNav = async function () {
  let data = [
    { classification_id: 1, classification_name: "Custom" },
    { classification_id: 2, classification_name: "Sedan" },
    { classification_id: 3, classification_name: "SUV" },
    { classification_id: 4, classification_name: "Truck" }
  ]
  let list = "<ul>"
  list += '<li><a href="/" title="Home page">Home</a></li>'
  data.forEach((row) => {
    list += "<li>"
    list +=
      '<a href="/inv/type/' +
      row.classification_id +
      '" title="See our inventory of ' +
      row.classification_name +
      ' vehicles">' +
      row.classification_name +
      "</a>"
    list += "</li>"
  })
  list += "</ul>"
  return list
}

module.exports = Util