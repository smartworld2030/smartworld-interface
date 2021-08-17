import { Button } from 'antd'

import Colors from '../../../Theme/Colors'

interface DepositButtonProps {
  width: number
  done: boolean
  loading: boolean
  disable?: boolean
  onClick: () => void
}

export const DepositButton: React.FC<DepositButtonProps> = ({
  width,
  done,
  loading,
  disable,
  onClick,
}) => {
  return (
    <Button
      shape="circle"
      type="default"
      style={{
        height: width,
        width: width,
      }}
      onClick={disable ? undefined : onClick}
    >
      <svg
        viewBox="0 0 100 100"
        opacity={loading || done ? '1' : disable ? '1' : '0.6'}
        fill={disable ? Colors.grey : Colors.green}
      >
        {done ? (
          <path d="M76.583 29.11h-4.66c-.653 0-1.273.3-1.673.813L42.763 64.743 29.583 48.043a2.133 2.133 0 0 0-1.673-.813H23.25c-.447 0-.693.513-.42.86l18.26 23.133c.853 1.08 2.493 1.08 3.353 0l32.56-41.26c.273-.34.027-.853-.42-.853z" />
        ) : (
          <path
            className={loading ? 'coin-flip-loading' : 'coin-flip'}
            d="M48.241 22.052c-5.128.317-10.052 1.934-14.289 4.693-5.069 3.3-9.035 8.118-11.207 13.616-1.868 4.726-2.515 9.722-1.888 14.612.31 2.442.891 4.673 1.815 7.029.805 2.046 1.643 3.65 2.93 5.577 3.637 5.458 8.93 9.458 15.239 11.524 5.234 1.716 10.989 1.901 16.309.521 11.451-2.963 19.965-12.415 21.681-24.057.251-1.676.297-2.363.29-4.356 0-1.452-.033-2.244-.119-2.97-.422-3.656-1.313-6.712-2.884-9.9-4.613-9.392-13.886-15.576-24.38-16.269-.911-.059-2.706-.073-3.498-.02zm2.158 11.114c.845.224 1.564.422 1.591.449 .026.033-.251 1.201-.62 2.607-.37 1.406-.66 2.561-.647 2.574.04 .026 2.534.627 2.548.607 .007-.007.31-1.155.68-2.548.37-1.399.68-2.548.686-2.554.026-.026 3.109.792 3.161.838 .026.026-.244 1.168-.607 2.548-.363 1.373-.667 2.554-.68 2.62-.013.092 .125.172 .706.403 3.392 1.333 5.267 3.089 5.65 5.293.119 .673.04 1.907-.165 2.693-.528 2.033-1.736 3.287-3.716 3.874l-.277.079 .37.224c1.208.726 2.039 1.551 2.495 
              2.482.422 .865.521 1.3.521 2.29 0 2.607-1.459 5.458-3.379 6.6-1.129.667-2.125.917-3.854.97-1.36.04-2.165-.02-3.736-.284-.561-.092-1.023-.158-1.036-.145-.013.013-.33 1.181-.7 2.594-.37 1.419-.7 2.6-.726 2.633-.04.04-3.128-.706-3.208-.779-.007-.007.297-1.181.673-2.614.376-1.432.667-2.627.64-2.653-.026-.026-.343-.119-.706-.211-.363-.092-.911-.244-1.221-.33-.304-.092-.561-.158-.574-.152-.007.013-.317 1.175-.686 2.587-.37 1.419-.693 2.6-.719 2.627-.053.059-3.102-.713-3.175-.799-.02-.026.271-1.208.647-2.62.37-1.419.68-2.607.68-2.647 0-.086-.02-.092-3.762-1.082-1.597-.422-2.666-.739-2.66-.785.013-.04.376-.871.812-1.841l.799-1.775 1.168.323c1.353.376 1.789.416 2.145.191 .132-.079.297-.244.376-.37.165-.271 3.96-14.652 3.96-15.015 0-.66-.495-1.307-1.195-1.564-.198-.079-.871-.264-1.498-.422-.627-.158-1.129-.323-1.115-.356.013-.04.211-.799.442-1.703.31-1.188.449-1.63.521-1.63.053 0 1.003.238 2.112.535 3.439.911 4.257
               1.115 4.303 1.063.026-.026.35-1.214.719-2.64.376-1.419.693-2.587.7-2.587.013 0 .713.178 1.558.403zM49.752 42.69c-.013.04-.383 1.439-.818 3.109-.436 1.67-.812 3.082-.825 3.135-.059.191 2.66.851 4.059.997 2.468.244 3.914-.521 4.33-2.297.436-1.855-.884-3.3-3.894-4.277-1.241-.396-2.812-.772-2.851-.667zM47.218 52.313c0 .013-.416 1.591-.924 3.518-.502 1.921-.898 3.518-.871 3.538.066 .066 1.914.561 2.798.752 1.307.277 2.092.376 3.122.383 2.211.02 3.399-.614 3.934-2.105.198-.541.205-1.505.013-1.98-.508-1.287-1.874-2.284-4.244-3.095-.911-.31-3.828-1.076-3.828-1.01z"
          ></path>
        )}
      </svg>
    </Button>
  )
}
