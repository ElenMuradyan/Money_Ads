import AdProgress from "../../components/sheard/AdProgress";
import Earings from "../../components/sheard/Earings";
import InviteFriends from "../../components/sheard/InviteFriends";

import './index.css';

const Cabinet = () => {
    return(
      <>
      <div className="grid">
        <Earings/>
        <AdProgress/>
      </div>
      <InviteFriends/>
      </>
    )
}

export default Cabinet;