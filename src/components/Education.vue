<template>
  <div>
    <b-table striped hover :items="items" :fields="fields" :tbody-tr-class="rowClass" head-variant="dark" ></b-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fields: [
          {
            key: 'id',
            sortable: true
          },
          {
            key: 'name',
            sortable: true
          },
          {
            key: 'Phone',
            label: 'Phone',
            sortable: true,
          }
        ],
      items: [
        { age: 22, first_name: "Dickerson", last_name: "Macdonald" },
        { age: 21, first_name: "Larsen", last_name: "Shaw" },
        { age: 12, first_name: "Geneva", last_name: "Wilson" },
        { age: 15, first_name: "Jami", last_name: "Carney" },
      ],
    };
  },
  methods: {
      rowClass() {
          return "";//item.id % 3 == 0 ? 'table-danger' : "table-warning";
      }
    },
  mounted(){
      console.log("calling api");
      fetch("http://taskcrm.local/api/education")
      .then(response => response.json())
      .then(data => {
          console.log("api called");
          console.log(data);
          this.items = data.education.data
      })
  }
};
</script>
