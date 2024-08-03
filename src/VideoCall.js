
import React, { useRef, useState } from 'react';
import SimplePeer from 'simple-peer';

const VideoCall = () => {
  const [peer, setPeer] = useState(null);
  const myVideoRef = useRef(null);
  const peerVideoRef = useRef(null);

  const startVideoCall = () => {
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then(stream => {
        myVideoRef.current.srcObject = stream;
        const newPeer = new SimplePeer({ initiator: true, stream });
        newPeer.on('signal', data => {
          // Send 'data' to the peer (you will need to implement the signaling mechanism)
          console.log('Signal data to send:', data);
        });
        newPeer.on('stream', peerStream => {
          peerVideoRef.current.srcObject = peerStream;
        });
        setPeer(newPeer);
      });
  };

  const handleReceiveSignal = (signal) => {
    if (peer) {
      peer.signal(signal);
    }
  };

  return (
    <div>
      <video ref={myVideoRef} autoPlay muted />
      <video ref={peerVideoRef} autoPlay />
      <button onClick={startVideoCall}>Start Video Call</button>
    </div>
  );
};

export default VideoCall;
