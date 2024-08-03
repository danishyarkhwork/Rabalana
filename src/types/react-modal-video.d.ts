declare module "react-modal-video" {
  import { Component } from "react";

  interface ModalVideoProps {
    channel: string;
    videoId: string;
    isOpen: boolean;
    onClose: () => void;
  }

  export default class ModalVideo extends Component<ModalVideoProps> {}
}
