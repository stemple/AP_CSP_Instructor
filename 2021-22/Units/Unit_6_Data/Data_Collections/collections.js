function fullNames(obj) {
    var result = [];
    for (var i = 0; i < obj.length; i++) {
        var personName = obj[i].name;
        var fullName = personName.first + " ";
        if ("middle" in personName) {
            fullName += (personName.middle + " ");
        }
        fullName += personName.last;
        result.push(fullName);
    }
    return result;
}

function averageAge(obj){
  count = 0
  for (i = 0; i < obj.length; i++){
    count += obj[i].age;
  }
  return (count / obj.length);
}

function ageDiscriminator(obj, num) {
    result = [];
    for (i = 0; i < obj.length; i++) {
        if (obj[i].age > num) {
            result.push(obj[i].name.first);
        }
    }
    return result;
}

