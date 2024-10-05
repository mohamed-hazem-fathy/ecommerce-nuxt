<template>
  <div>
    <NuxtLayout>
    <NuxtPage></NuxtPage>
  </NuxtLayout>
  </div>
</template>

  <style>

  /* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #BCDDFE;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #40BFFF;
  border-radius: 9px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #d1cfcf;
}
</style>
<script setup>
import { createUser } from './composables/useFirebase';
import { signInUser } from './composables/useFirebase';
import { signOutUser } from './composables/useFirebase';
import { useFirebaseUser } from './composables/useStates';
const credentials = ref();

const FirebaseUser  = useFirebaseUser();



const  signin =  async  () => {
  const email = 'mh5725012@gmail.com';
  const password = '123321';
   credentials.value = await signInUser(email,password)
  // credentials.user.photoURL = "mmsfgdfg"
  console.log('credentials : ', credentials)
}

const signout = async () => {
  credentials.value = await signOutUser()
}

console.log('---app---');


onMounted(async () => {

  // Creat new user
  // const email = 'mh5725012asd@gmail.com';
  // const password = '123321';
  // const credentials = await createUser(email,password)
  // console.log('credentials : ', credentials)



  // signInUser
  //  const email = 'mh5725012@gmail.com';
  // const password = '123321';
  // const credentials = await signInUser(email,password)
  // credentials.user.photoURL = "mmsfgdfg"
  // console.log('credentials : ', credentials)


  // signOut

  // const result = await signOutUser();
  // console.log('result : ', result)



})




</script>
