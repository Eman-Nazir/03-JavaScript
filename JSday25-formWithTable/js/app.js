document.forms["student-details-form"].addEventListener(
    "submit",
    function (event) {
      event.preventDefault(); 
      const name = event.target.name.value;
      const age =  event.target.age.value;
      const dob =  event.target.dob.value;
      const gender = event.target.gender.value;
      const student = { name, age, dob, gender };
      const previousRecordsArray =
        window.localStorage.getItem("records") ?? JSON.stringify([]);
      const previousRecordsArrayParsed = JSON.parse(previousRecordsArray);
      // debugger;
      console.log("previousRecordsArray", previousRecordsArrayParsed);
      previousRecordsArrayParsed.push(student);
      window.localStorage.setItem(
        "records",
        JSON.stringify(previousRecordsArrayParsed)
      );
      
  
      event.target.reset();
    }
  );


