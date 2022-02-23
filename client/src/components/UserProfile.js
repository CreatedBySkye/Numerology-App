
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import OtherProfile from "./OtherProfile";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import axios from "axios";


const UserProfile = ({
  userProfile,
  otherProfiles,
  show,
  handleClose,
  handleShow,
  showEdit,
  handleCloseEdit,
  handleShowEdit,
  handleProfileDelete,
  handleUserProfileAdd,
  handleUserProfileEdit,
}) => {
  const [newUserProfile, setNewUserProfile] = useState({});
  // const [show, setShow] = useState(false);
  const {
    user: { email },
  } = useAuth0();

 const getRadicalNumber = () => {
    let userId = '618929';
    let apiKey = 'ec92a03f92e90907dc77a83e0bdd6618';
    let data = {
    day: userProfile.birthDay,
    month: userProfile.birthMonth,
    year: userProfile.birthYear,
    };
    let request = axios({
      url: "https://json.astrologyapi.com/v1/numero_report",
      method: "POST",
      dataType:'json',
      headers: {
      "authorization": "Basic " + btoa(userId+":"+apiKey),
      "Content-Type":'application/json'
      },
      data:JSON.stringify(data)
      });
      
      request.then( function(resp){
       console.log(resp)
       const h1 = document.createElement("H1");
       h1.className="border-red-800 border-4 text-purple-800 absolute top-40 right-20 w-1/4 overflow-y-auto h-2/4"
       const textNode = document.createTextNode(resp.data.description);
       h1.appendChild(textNode);
       document.body.appendChild(h1);
      }, function(err){
      console.log(err);
      });
    
    }
  const getLifePath = () => {
    if (userProfile.lifePath === 1) {
      const h1 = document.createElement("H1");
      h1.className="border-red-800 border-4 text-purple-800 absolute top-40 ml-96 left-96 w-1/4 overflow-y-auto h-2/4"
      const textNode = document.createTextNode("Life Path #1 - The Independent Pioneer: This is the life path of The Independent Pioneer, The Innovator. Those who walk this life path will face a unique set of challenges which are intended to teach you the lessons you will need to learn along the way to becoming the Independent Pioneer. Some of these challenges include struggling with co-dependency and the denial of self. To master the life path of The Innovator you must learn to believe in yourself. This means that even while it may be easier to remain dependent on others, opting for the comfortable way of life will only lead to dead ends and will leave you feel restless and unsatisfied. You will need to learn to stand on your own in order to develop the self-confidence that is required to be The Innovator and to truly bring your dreams and ideas to life. Struggling with dependency will be a reoccurring theme throughout the course of your life. Although there is a level of uncertainty involved in claiming your independence, there are undoubtedly many rewards along this path that are waiting to be discovered.")
      h1.appendChild(textNode);
      document.body.appendChild(h1);
    }
    else if (userProfile.lifePath === 2) {
      const h1 = document.createElement("H1");
      h1.className="border-red-800 border-4 text-purple-800 absolute top-40 ml-80 left-96 w-1/4 overflow-y-auto h-2/4"
      const textNode = document.createTextNode("Life Path #2 - The Diplomat:As a Life Path 2 you will find yourself attracted to a life of building and nurturing relationships. You bring unity and compassion to the world with your big heart and have a tendency to bring out the good in people in your life.");
      h1.appendChild(textNode);
      document.body.appendChild(h1);
    }
  
    else if (userProfile.lifePath === 3) {
      const h1 = document.createElement("H1");
      h1.className="border-red-800 border-4 text-purple-800 absolute top-40 ml-80 left-96 w-1/4 overflow-y-auto h-2/4"
      const textNode = document.createTextNode("Life Path #3: The Creative: People with a Life Path 3 are the most artistic in the bunch. You find ways of creating the most beautiful things in this world such as art, music, literature, etc. You breathe life into culture, and make it seem so simple because of your natural gift for expression.");
      h1.appendChild(textNode);
      document.body.appendChild(h1);
    }
    else if (userProfile.lifePath === 4) {
      const h1 = document.createElement("H1");
      h1.className="border-red-800 border-4 text-purple-800 absolute top-40 ml-80 left-96 w-1/4 overflow-y-auto h-2/4"
      const textNode = document.createTextNode("Life Path #4: The Crafstman: The life of a Life Path 4 is one of work and discipline to feel stable. You do not like taking short-cuts and often feel that the best way to do anything is through dedications and perseverance. You can see through “Get Rich Quick” schemes and consider them to be a waste of time, you see that time as being better spent working towards the solid goal.");
      h1.appendChild(textNode);
      document.body.appendChild(h1);
    }
    else if (userProfile.lifePath === 5) {
      const h1 = document.createElement("H1");
      h1.className="border-red-800 border-4 text-purple-800 absolute top-40 ml-80 left-96 w-1/4 overflow-y-auto h-2/4"
      const textNode = document.createTextNode("Life Path #5 - The Freedom Seeker: The Life Path 5 loves to have variety in life. Anything new is exciting. Whether it is traveling to a place you've never been, or meeting new people, you are always looking for that next experience and adventure.");
      h1.appendChild(textNode);
      document.body.appendChild(h1);
    }
    else if (userProfile.lifePath === 6) {
      const h1 = document.createElement("H1");
      h1.className="border-red-800 border-4 text-purple-800 absolute top-40 ml-80 left-96 w-1/4 overflow-y-auto h-2/4"
      const textNode = document.createTextNode("Life Path #6 - The Visionary: The Life Path 6 looks for ways to make harmony with everything you encounter. Whether it is art, music, or relationships, no other Life Path can make things coalesce as naturally as you can. Your magnetic personality draws people in and can lead to you being the center of attention.");
      h1.appendChild(textNode);
      document.body.appendChild(h1);
    }
    else if (userProfile.lifePath === 7) {
      const h1 = document.createElement("H1");
      h1.className="border-red-800 border-4 text-purple-800 absolute top-40 ml-80 left-96 w-1/4 overflow-y-auto h-2/4"
      const textNode = document.createTextNode("Life Path #7 - The Analyst:As a Life Path 7 you are always looking for the answers. Whether the question is big or small, doesn't matter, it's the glory of finding the answer that drives you. This can lead to some interesting journeys during your life since you tend to seek spiritual or inner self understanding.");
      h1.appendChild(textNode);
      document.body.appendChild(h1);
    }
    else if (userProfile.lifePath === 8) {
      const h1 = document.createElement("H1");
      h1.className="border-red-800 border-4 text-purple-800 absolute top-40 ml-80 left-96 w-1/4 overflow-y-auto h-2/4"
      const textNode = document.createTextNode("Life Path #8 - The Manifester:  As a Life Path 8 you are alive to make an impact on the world through your drive and ambition. You are a person of authority, and material wealth. You will often master the art of being successful in the career of your choosing.");
      h1.appendChild(textNode);
      document.body.appendChild(h1);
    }
    else if (userProfile.lifePath === 9) {
      const h1 = document.createElement("H1");
      h1.className="border-red-800 border-4 text-purple-800 absolute top-40 ml-80 left-96 w-1/4 overflow-y-auto h-2/4"
      const textNode = document.createTextNode("Life Path #9 - The Humanitarian: You have great compassion and idealism. You are a utopian, and will spend your life trying to realize some aspect of your utopian dream, sacrificing money, time, and energy for a better world. It is in giving that you will find much satisfaction. You have a broad outlook on life. You tend to see the big picture, rather than the minute details.");
      h1.appendChild(textNode);
      document.body.appendChild(h1);
    }
    else if (userProfile.lifePath === 11) {
      const h1 = document.createElement("H1");
      h1.className="border-red-800 border-4 text-purple-800 absolute top-40 ml-80 left-96 w-1/4 overflow-y-auto h-2/4"
      const textNode = document.createTextNode("Your 'Life Path Number' is 11- The Master Healer: You know you're different, you don't need other people to tell you that. As a Life Path 11, life is filled with mysterious connections and experiences that just seem to Pop Up. You're more intuitive, or sensitive, than other people you know.");
      h1.appendChild(textNode);
      document.body.appendChild(h1);
      
    }
    else if (userProfile.lifePath === 22) {
      const h1 = document.createElement("H1");
      h1.className="border-red-800 border-4 text-purple-800 absolute top-40 ml-80 left-96 w-1/4 overflow-y-auto h-2/4"
      const textNode = document.createTextNode("Your 'Life Path Number' is 22- The Master Builder: The Life Path 22 is one of the most powerful and influential paths in numerology. Your own abilities may seem overwhelming at times, and difficult to manage, but learning to harness your gifts will allow you greater control over your destiny, and in some cases, the destiny of others. This may cause you to feel as though a heavy burden rests on your shoulders. Be careful not to take on too much at once. And at the same time, don't be afraid to challenge yourself.");
      h1.appendChild(textNode);
      document.body.appendChild(h1);
    }
    else if (userProfile.lifePath === 33) {
      const h1 = document.createElement("H1");
      h1.className="border-red-800 border-4 text-purple-800 absolute top-40 ml-80 left-96 w-1/4 overflow-y-auto h-2/4"
      const textNode = document.createTextNode("Your 'Life Path Number' is 33- The Master Teacher: This individual's focus is on reaching the world and uplifting the loving energy of mankind. They are not concerned with personal ambition, and have great devotion to their cause. A birth date that reduces down to 33 is very rare. When it does happen you may be looking at a great and significant spiritual leader along the lines of the Dalai Lama (Life Path 22) or Gandhi (Life Path 9). Remember that 33 is the higher, double digit vibration of Life Path Number 6, a very nurturing and responsible number.");
      h1.appendChild(textNode);
      document.body.appendChild(h1);
    }
  }



  const radicalNumber = () => {
    const dob = userProfile.birthDay + userProfile.birthMonth
  
    while (dob.toString().length > 1) {
    dob.reduce();
    }
    const h3 = document.createElement("H3");
      h3.className=" "
      const textNode = document.createTextNode(dob);
      h3.appendChild(textNode);
      document.body.appendChild(h3);
    return dob;
  };



 getRadicalNumber()
  getLifePath()


  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  return (
    
    <>
      
            <h1 className="absolute top-40 mb-40 last:mt-2 left-20">Your Profile</h1>
            <div
            className="absolute left-20 mr-10 pb-10 top-40 mt-20 profile-container border-purple-700 border-4"
            >
              
              <h2>{userProfile.name}</h2>
              <h3>
                Date of Birth:{" "}
                {`${userProfile.birthMonth}/${userProfile.birthDay}/${userProfile.birthYear}`}
              </h3>
              <h3>Gender: {userProfile.gender}</h3>
              <h3>Life Path Number: {userProfile.lifePath}</h3>
              <h3>Zodiac Sign: {userProfile.zodiacSign}</h3>
              <h3>Radical Number: {radicalNumber()}</h3>
            </div>
            <button onClick={handleShow} className="btn btn-success btn-block absolute top-96 mt-80 left-60">
              Add Profile
            </button>
            <h1 className="text-black ml-10 absolute pt-40 top-96 left-20">Other Profiles</h1>
            
              {otherProfiles.length > 0 ? (
                otherProfiles.map((profile, idx) => (
                  <OtherProfile
                    key={idx}
                    profile={profile}
                    handleProfileDelete={handleProfileDelete}
                    handleUserProfileEdit={handleUserProfileEdit}
                    showEdit={showEdit}
                  handleCloseEdit={handleCloseEdit}
                  handleShowEdit={handleShowEdit}
                />
              ))
            ) : (
              <h3 className="absolute left-20 pt-60 top-96">No other profiles</h3>
            )}
        
      
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group
            style={{ marginBottom: "10px" }}
            controlId="newProfileName"
          >
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="A friend's name"
              value={newUserProfile.name}
              onChange={(e) =>
                setNewUserProfile({
                  ...newUserProfile,
                  name: e.target.value,
                })
              }
            />
          </Form.Group>
          <Form.Group
            style={{ marginBottom: "10px" }}
            controlId="newProfileGender"
          >
            <Form.Label>Gender</Form.Label>
            <Form.Control
              type="text"
              placeholder="Female"
              value={newUserProfile.gender}
              onChange={(e) =>
                setNewUserProfile({
                  ...newUserProfile,
                  gender: e.target.value,
                })
              }
            />
          </Form.Group>
          <Form.Group
            style={{ marginBottom: "10px" }}
            controlId="newProfileBirthMonth"
          >
            <Form.Label>Birth Month (Enter as number) </Form.Label>
            <Form.Control
              type="number"
              placeholder="3"
              value={newUserProfile.birthMonth}
              onChange={(e) =>
                setNewUserProfile({
                  ...newUserProfile,
                  birthMonth: e.target.value,
                })
              }
            />
          </Form.Group>
          <Form.Group
            style={{ marginBottom: "10px" }}
            controlId="newProfileBirthDay"
          >
            <Form.Label>Birth Date (Enter as number)</Form.Label>
            <Form.Control
              type="number"
              placeholder="11"
              value={newUserProfile.birthDay}
              onChange={(e) =>
                setNewUserProfile({
                  ...newUserProfile,
                  birthDay: e.target.value,
                })
              }
            />
          </Form.Group>
          <Form.Group
            style={{ marginBottom: "10px" }}
            controlId="newProfileBirthYear"
          >
            <Form.Label>Birth Year (Enter as number)</Form.Label>
            <Form.Control
              type="number"
              placeholder="2000"
              value={newUserProfile.birthYear}
              onChange={(e) =>
                setNewUserProfile({
                  ...newUserProfile,
                  birthYear: e.target.value,
                })
              }
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => handleUserProfileAdd(newUserProfile, email)}
          >
            Add
          </Button>
        </Modal.Footer>
      </Modal>
   
    </>
  );
};

export default UserProfile;
