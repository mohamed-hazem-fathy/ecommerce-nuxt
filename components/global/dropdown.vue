<template>
    <v-app>
      <v-toolbar>
        <v-toolbar-title>E-Comm</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-menu offset-y>
          <template v-slot:activator="{ props }">
            <v-btn v-bind="props">Category</v-btn>
          </template>
          <v-list>
            <v-list-item-group>
              <v-list-item>
                <v-list-item-title>Corporate Shoes</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>Sneakers</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>Sandals</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>Sport Shoe</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>Trainers</v-list-item-title>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-menu>
      </v-toolbar>
    </v-app>
  </template>

  <script>
  export default {
    name: 'DropdownMenu',
  }
  </script>

  <style>
  /* يمكنك إضافة أنماط مخصصة هنا */
  </style>  