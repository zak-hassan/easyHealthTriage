export const tableConfig = {
    columns:[
      {data:"id", title:"ID"},
      {data:"fname", title:"First Name"},
      {data:"lname", title:"Last Name"},
      {data:"condition", title:"condition"},
      {data:"severity", title:"severity"}
    ],
    data: [
      {id: "1", fname: "John", lname: "Smith", condition: "Gun Shot", severity: "5"},
      {id: "2", fname: "Jacob", lname: "Jones", condition: "Heart Attach", severity: "2"},
      {id: "3", fname: "David", lname: "Taylor", condition: "Strook", severity: "4"},
      {id: "4", fname: "Michael", lname: "Johnson", condition: "Broken Leg", severity: "5"},
      {id: "5", fname: "Richard", lname: "Jackson", condition: "Ankle Sprain", severity: "2"},
      {id: "6", fname: "Stephanie", lname: "Shaw", condition: "Pregnant", severity: "5"},
      {id: "7", fname: "Christian", lname: "Lloyd", condition: "Headache", severity: "1"},
      {id: "8", fname: "Lukas", lname: "Ellis", condition: "Stomach Ache", severity: "3"},
      {id: "9", fname: "Lindsay", lname: "Martin", condition: "Cold", severity: "2"},
      {id: "10", fname: "Daniel", lname: "Johnston", condition: "Flu", severity: "1"},
      {id: "12", fname: "Jerry", lname: "Carr", condition: "Car accident", severity: "3"},
      {id: "13", fname: "Ian", lname: "Hamilton", condition: "Burn hand", severity: "1"},
      {id: "14", fname: "Warren", lname: "Cox", condition: "Dog attack", severity: "2"},
      {id: "15", fname: "Peter", lname: "Foster", condition: "Asma Attack", severity: "2"},
      {id: "16", fname: "Alex", lname: "Barnes", condition: "Tumor", severity: "3"},
      {id: "17", fname: "Cody", lname: "Gordon", condition: "Cancer", severity: "4"}
    ],
    dom: "t",
    order: [[ 0, 'asc' ]],
    pfConfig: {
      filterCaseInsensitive: true,
      paginationSelector: "#pagination1",
      colvisMenuSelector: '.table-view-pf-colvis-menu'
    },
  };