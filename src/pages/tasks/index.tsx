import styles from '@/styles/modules/Tasks.module.scss'

const Tasks = () => {
  return <>
    <header className={styles.header}>
      Задания
      <span>4/5</span>
    </header>
    <main className={styles.tasks}>
      <h3 className={styles.title}>Задания на сегодня</h3>
      <div className={styles.list}>
        <div className={styles.item}>
          <div className={styles.picture}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.4">
                <path d="M8.71301 6.94035C9.11797 6.37453 9.33571 5.69616 9.33571 5.00035C9.33571 4.30454 9.11797 3.62617 8.71301 3.06035C9.0922 2.80204 9.54086 2.66488 9.99967 2.66702C10.6185 2.66702 11.212 2.91285 11.6496 3.35043C12.0872 3.78802 12.333 4.38151 12.333 5.00035C12.333 5.61919 12.0872 6.21268 11.6496 6.65027C11.212 7.08785 10.6185 7.33368 9.99967 7.33368C9.54086 7.33582 9.0922 7.19866 8.71301 6.94035ZM3.66634 5.00035C3.66634 4.53886 3.80319 4.08773 4.05958 3.70402C4.31597 3.3203 4.68039 3.02124 5.10675 2.84463C5.53311 2.66803 6.00226 2.62182 6.45489 2.71185C6.90751 2.80188 7.32327 3.02411 7.64959 3.35043C7.97591 3.67676 8.19814 4.09252 8.28817 4.54514C8.37821 4.99776 8.332 5.46692 8.15539 5.89328C7.97879 6.31964 7.67972 6.68406 7.29601 6.94045C6.91229 7.19684 6.46116 7.33368 5.99967 7.33368C5.38084 7.33368 4.78734 7.08785 4.34976 6.65027C3.91217 6.21268 3.66634 5.61919 3.66634 5.00035ZM4.99967 5.00035C4.99967 5.19813 5.05832 5.39147 5.16821 5.55592C5.27809 5.72037 5.43426 5.84854 5.61699 5.92423C5.79972 5.99992 6.00078 6.01972 6.19477 5.98114C6.38875 5.94255 6.56693 5.84731 6.70678 5.70746C6.84663 5.5676 6.94187 5.38942 6.98046 5.19544C7.01905 5.00146 6.99924 4.80039 6.92355 4.61767C6.84787 4.43494 6.71969 4.27876 6.55524 4.16888C6.3908 4.059 6.19746 4.00035 5.99967 4.00035C5.73446 4.00035 5.4801 4.10571 5.29257 4.29324C5.10503 4.48078 4.99967 4.73513 4.99967 5.00035ZM10.6663 11.3337V12.667H1.33301V11.3337C1.33301 11.3337 1.33301 8.66702 5.99967 8.66702C10.6663 8.66702 10.6663 11.3337 10.6663 11.3337ZM9.33301 11.3337C9.23967 10.8137 8.44634 10.0003 5.99967 10.0003C3.55301 10.0003 2.71301 10.8737 2.66634 11.3337M10.633 8.66702C11.0416 8.98484 11.3757 9.38825 11.6118 9.84893C11.8479 10.3096 11.9803 10.8164 11.9997 11.3337V12.667H14.6663V11.3337C14.6663 11.3337 14.6663 8.91368 10.6263 8.66702H10.633Z" fill="white" />
              </g>
            </svg>
          </div>
          <div className={styles.about}>
            <p className={styles.name}>Пригласи 5 друзей</p>
            <p className={styles.text}>
              Осталось пригласить 1
              <span>
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_40_11943)">
                    <path d="M5.20995 10.3916C7.92013 10.3916 10.1172 8.19455 10.1172 5.48437C10.1172 2.77418 7.92013 0.577148 5.20995 0.577148C2.49977 0.577148 0.302734 2.77418 0.302734 5.48437C0.302734 8.19455 2.49977 10.3916 5.20995 10.3916Z" fill="#F4900C" />
                    <path d="M5.20995 9.81443C7.92013 9.81443 10.1172 7.6174 10.1172 4.90722C10.1172 2.19704 7.92013 0 5.20995 0C2.49977 0 0.302734 2.19704 0.302734 4.90722C0.302734 7.6174 2.49977 9.81443 5.20995 9.81443Z" fill="#FFCC4D" />
                    <path d="M5.20921 9.23677C7.44112 9.23677 9.25044 7.42745 9.25044 5.19553C9.25044 2.96362 7.44112 1.1543 5.20921 1.1543C2.97729 1.1543 1.16797 2.96362 1.16797 5.19553C1.16797 7.42745 2.97729 9.23677 5.20921 9.23677Z" fill="#FFE8B6" />
                    <path d="M5.20921 8.94771C7.44112 8.94771 9.25044 7.13838 9.25044 4.90647C9.25044 2.67456 7.44112 0.865234 5.20921 0.865234C2.97729 0.865234 1.16797 2.67456 1.16797 4.90647C1.16797 7.13838 2.97729 8.94771 5.20921 8.94771Z" fill="#FFAC33" />
                    <g clip-path="url(#clip1_40_11943)">
                      <path d="M6.58141 4.33052C4.63295 4.76351 4.17831 6.09928 3.728 7.21856L4.13718 7.36145L4.34285 6.86351C4.44677 6.90032 4.55502 6.92846 4.63295 6.92846C7.0144 6.92846 7.66388 3.24805 7.66388 3.24805C7.44739 3.68104 5.93192 3.73516 4.84945 3.95166C3.76697 4.16815 3.33398 5.08825 3.33398 5.52124C3.33398 5.95423 3.71285 6.3331 3.71285 6.3331C4.41646 4.33052 6.58141 4.33052 6.58141 4.33052Z" fill="#F4900C" />
                    </g>
                    <g clip-path="url(#clip2_40_11943)">
                      <path d="M6.58141 4.04146C4.63295 4.47445 4.17831 5.81022 3.728 6.9295L4.13718 7.07239L4.34285 6.57445C4.44677 6.61125 4.55502 6.6394 4.63295 6.6394C7.0144 6.6394 7.66388 2.95898 7.66388 2.95898C7.44739 3.39197 5.93192 3.4461 4.84945 3.66259C3.76697 3.87909 3.33398 4.79919 3.33398 5.23218C3.33398 5.66517 3.71285 6.04404 3.71285 6.04404C4.41646 4.04146 6.58141 4.04146 6.58141 4.04146Z" fill="#FFD983" />
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_40_11943">
                      <rect width="10.3918" height="10.3918" fill="white" transform="translate(0.0136719)" />
                    </clipPath>
                    <clipPath id="clip1_40_11943">
                      <rect width="5.19588" height="5.19588" fill="white" transform="translate(2.90039 2.59766)" />
                    </clipPath>
                    <clipPath id="clip2_40_11943">
                      <rect width="5.19588" height="5.19588" fill="white" transform="translate(2.90039 2.30957)" />
                    </clipPath>
                  </defs>
                </svg>
                +250
              </span>
            </p>
          </div>
          <button type="button" className={`${styles.btn}`}>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_40_9500)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.81871 1.50561C9.72646 1.54836 9.56896 1.69611 8.81746 2.44986C8.12671 3.14211 7.91596 3.36561 7.88221 3.43911C7.85417 3.50005 7.83972 3.56636 7.83984 3.63344C7.83997 3.70052 7.85469 3.76677 7.88296 3.82761C7.93546 3.94011 8.10796 4.11711 8.22421 4.17786C8.34196 4.23936 8.51671 4.23861 8.63896 4.17636C8.76421 4.11186 10.4967 2.37936 10.5612 2.25411C10.5919 2.18962 10.6081 2.11916 10.6085 2.04773C10.6088 1.97631 10.5935 1.90567 10.5635 1.84086C10.4805 1.70206 10.3632 1.58688 10.223 1.50636C10.1609 1.47283 10.0915 1.45521 10.0209 1.45508C9.95039 1.45495 9.88091 1.47231 9.81871 1.50561ZM8.98771 5.25261C8.8863 5.28055 8.79464 5.33611 8.72296 5.41311C8.62021 5.55186 8.58797 5.83386 8.65246 6.03261C8.69596 6.16761 8.80546 6.27711 8.94046 6.32061C9.03196 6.35061 9.18121 6.35436 10.298 6.35436C11.3697 6.35436 11.567 6.34986 11.6555 6.32361C11.8767 6.25761 11.9847 6.08361 11.9855 5.79336C11.9855 5.50461 11.8752 5.33136 11.6465 5.26236C11.5692 5.23911 11.327 5.23461 10.301 5.23611C9.61247 5.23761 9.02146 5.24511 8.98771 5.25261ZM3.81871 7.50561C3.72646 7.54836 3.56896 7.69611 2.81746 8.44986C2.12671 9.14211 1.91596 9.36561 1.88221 9.43911C1.85417 9.50005 1.83972 9.56636 1.83984 9.63344C1.83997 9.70052 1.85469 9.76678 1.88296 9.82761C1.93546 9.94011 2.10796 10.1171 2.22421 10.1779C2.34196 10.2394 2.51671 10.2386 2.63896 10.1764C2.76421 10.1119 4.49671 8.37936 4.56121 8.25411C4.59193 8.18962 4.60806 8.11916 4.60845 8.04773C4.60884 7.97631 4.59348 7.90567 4.56346 7.84086C4.48046 7.70206 4.36322 7.58688 4.22296 7.50636C4.16089 7.47283 4.09148 7.45521 4.02093 7.45508C3.95039 7.45495 3.88091 7.47231 3.81871 7.50561ZM8.24371 7.49361C8.12521 7.54761 7.95046 7.71861 7.88971 7.84011C7.85873 7.90085 7.84182 7.96779 7.84027 8.03595C7.83871 8.10412 7.85253 8.17177 7.88071 8.23386C7.93621 8.35761 9.67922 10.1066 9.81647 10.1764C10.0107 10.2761 10.2102 10.2274 10.4112 10.0309C10.6092 9.83736 10.6617 9.62736 10.5612 9.43161C10.4915 9.29436 8.74246 7.55136 8.61871 7.49586C8.55958 7.47025 8.49588 7.45685 8.43144 7.45647C8.367 7.45608 8.30315 7.46871 8.24371 7.49361ZM5.98771 8.25186C5.88639 8.2804 5.79482 8.33617 5.72296 8.41311C5.61946 8.55261 5.61871 8.56236 5.61871 9.91086C5.61871 10.9849 5.62321 11.1821 5.64946 11.2706C5.71546 11.4919 5.89021 11.5999 6.17896 11.5999C6.46771 11.5999 6.64246 11.4919 6.70846 11.2706C6.75496 11.1116 6.75421 8.70036 6.70696 8.56161C6.69244 8.50566 6.66585 8.45358 6.62905 8.40901C6.59225 8.36444 6.54614 8.32846 6.49396 8.30361C6.41146 8.25861 6.36346 8.24736 6.22171 8.24211C6.14359 8.2374 6.06518 8.24067 5.98771 8.25186Z" fill="#D3F491" />
                <path opacity="0.7" d="M0.371094 5.79262C0.371094 5.50837 0.480594 5.33212 0.701844 5.26237C0.770844 5.24062 1.04159 5.23612 2.08784 5.23912L3.38759 5.24362L3.49034 5.30062C3.54398 5.32932 3.59241 5.36684 3.63359 5.41162C3.73634 5.55112 3.76859 5.83312 3.70409 6.03187C3.68201 6.09908 3.64444 6.16016 3.59441 6.21019C3.54439 6.26021 3.48331 6.29778 3.41609 6.31987C3.32459 6.34987 3.17534 6.35362 2.05859 6.35362C0.986844 6.35362 0.789594 6.34912 0.701094 6.32287C0.479844 6.25687 0.371844 6.08287 0.371094 5.79262Z" fill="#D3F491" />
                <path opacity="0.5" d="M1.88941 1.84068C1.95016 1.71918 2.12491 1.54818 2.24341 1.49418C2.30285 1.46929 2.3667 1.45665 2.43114 1.45704C2.49558 1.45743 2.55928 1.47083 2.61841 1.49643C2.74216 1.55193 4.49116 3.29493 4.56091 3.43218C4.66141 3.62793 4.60891 3.83793 4.41091 4.03143C4.20991 4.22793 4.01041 4.27668 3.81616 4.17693C3.67891 4.10718 1.93591 2.35818 1.88041 2.23443C1.85223 2.17234 1.8384 2.1047 1.83996 2.03653C1.84152 1.96836 1.85842 1.90142 1.88941 1.84068Z" fill="#D3F491" />
                <g opacity="0.4">
                  <path d="M5.64794 0.319276C5.69444 0.162526 5.79044 0.066526 5.95694 0.012526C6.03989 0.000828912 6.1238 -0.00268794 6.20744 0.00202604C6.43169 0.00802604 6.53144 0.0447761 6.62444 0.155026C6.73544 0.287026 6.73769 0.311026 6.73769 1.67603C6.73769 3.08678 6.73919 3.06878 6.59519 3.21278C6.40244 3.40478 5.95244 3.40478 5.75969 3.21278C5.61569 3.06878 5.61719 3.08678 5.61719 1.67603C5.61719 0.611026 5.62169 0.407026 5.64794 0.319276Z" fill="#D3F491" />
                  <path d="M5.64794 0.319276C5.69444 0.162526 5.79044 0.066526 5.95694 0.012526C6.03989 0.000828912 6.1238 -0.00268794 6.20744 0.00202604C6.43169 0.00802604 6.53144 0.0447761 6.62444 0.155026C6.73544 0.287026 6.73769 0.311026 6.73769 1.67603C6.73769 3.08678 6.73919 3.06878 6.59519 3.21278C6.40244 3.40478 5.95244 3.40478 5.75969 3.21278C5.61569 3.06878 5.61719 3.08678 5.61719 1.67603C5.61719 0.611026 5.62169 0.407026 5.64794 0.319276Z" fill="#D3F491" />
                </g>
              </g>
              <defs>
                <clipPath id="clip0_40_9500">
                  <rect width="12" height="12" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
        <div className={`${styles.item} ${styles.completed}`}>
          <div className={styles.picture}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.4">
                <path d="M8.71301 6.94035C9.11797 6.37453 9.33571 5.69616 9.33571 5.00035C9.33571 4.30454 9.11797 3.62617 8.71301 3.06035C9.0922 2.80204 9.54086 2.66488 9.99967 2.66702C10.6185 2.66702 11.212 2.91285 11.6496 3.35043C12.0872 3.78802 12.333 4.38151 12.333 5.00035C12.333 5.61919 12.0872 6.21268 11.6496 6.65027C11.212 7.08785 10.6185 7.33368 9.99967 7.33368C9.54086 7.33582 9.0922 7.19866 8.71301 6.94035ZM3.66634 5.00035C3.66634 4.53886 3.80319 4.08773 4.05958 3.70402C4.31597 3.3203 4.68039 3.02124 5.10675 2.84463C5.53311 2.66803 6.00226 2.62182 6.45489 2.71185C6.90751 2.80188 7.32327 3.02411 7.64959 3.35043C7.97591 3.67676 8.19814 4.09252 8.28817 4.54514C8.37821 4.99776 8.332 5.46692 8.15539 5.89328C7.97879 6.31964 7.67972 6.68406 7.29601 6.94045C6.91229 7.19684 6.46116 7.33368 5.99967 7.33368C5.38084 7.33368 4.78734 7.08785 4.34976 6.65027C3.91217 6.21268 3.66634 5.61919 3.66634 5.00035ZM4.99967 5.00035C4.99967 5.19813 5.05832 5.39147 5.16821 5.55592C5.27809 5.72037 5.43426 5.84854 5.61699 5.92423C5.79972 5.99992 6.00078 6.01972 6.19477 5.98114C6.38875 5.94255 6.56693 5.84731 6.70678 5.70746C6.84663 5.5676 6.94187 5.38942 6.98046 5.19544C7.01905 5.00146 6.99924 4.80039 6.92355 4.61767C6.84787 4.43494 6.71969 4.27876 6.55524 4.16888C6.3908 4.059 6.19746 4.00035 5.99967 4.00035C5.73446 4.00035 5.4801 4.10571 5.29257 4.29324C5.10503 4.48078 4.99967 4.73513 4.99967 5.00035ZM10.6663 11.3337V12.667H1.33301V11.3337C1.33301 11.3337 1.33301 8.66702 5.99967 8.66702C10.6663 8.66702 10.6663 11.3337 10.6663 11.3337ZM9.33301 11.3337C9.23967 10.8137 8.44634 10.0003 5.99967 10.0003C3.55301 10.0003 2.71301 10.8737 2.66634 11.3337M10.633 8.66702C11.0416 8.98484 11.3757 9.38825 11.6118 9.84893C11.8479 10.3096 11.9803 10.8164 11.9997 11.3337V12.667H14.6663V11.3337C14.6663 11.3337 14.6663 8.91368 10.6263 8.66702H10.633Z" fill="white" />
              </g>
            </svg>
          </div>
          <div className={styles.about}>
            <p className={styles.name}>Пригласи 5 друзей</p>
            <p className={styles.text}>
              Осталось пригласить 1
              <span>
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_40_11943)">
                    <path d="M5.20995 10.3916C7.92013 10.3916 10.1172 8.19455 10.1172 5.48437C10.1172 2.77418 7.92013 0.577148 5.20995 0.577148C2.49977 0.577148 0.302734 2.77418 0.302734 5.48437C0.302734 8.19455 2.49977 10.3916 5.20995 10.3916Z" fill="#F4900C" />
                    <path d="M5.20995 9.81443C7.92013 9.81443 10.1172 7.6174 10.1172 4.90722C10.1172 2.19704 7.92013 0 5.20995 0C2.49977 0 0.302734 2.19704 0.302734 4.90722C0.302734 7.6174 2.49977 9.81443 5.20995 9.81443Z" fill="#FFCC4D" />
                    <path d="M5.20921 9.23677C7.44112 9.23677 9.25044 7.42745 9.25044 5.19553C9.25044 2.96362 7.44112 1.1543 5.20921 1.1543C2.97729 1.1543 1.16797 2.96362 1.16797 5.19553C1.16797 7.42745 2.97729 9.23677 5.20921 9.23677Z" fill="#FFE8B6" />
                    <path d="M5.20921 8.94771C7.44112 8.94771 9.25044 7.13838 9.25044 4.90647C9.25044 2.67456 7.44112 0.865234 5.20921 0.865234C2.97729 0.865234 1.16797 2.67456 1.16797 4.90647C1.16797 7.13838 2.97729 8.94771 5.20921 8.94771Z" fill="#FFAC33" />
                    <g clip-path="url(#clip1_40_11943)">
                      <path d="M6.58141 4.33052C4.63295 4.76351 4.17831 6.09928 3.728 7.21856L4.13718 7.36145L4.34285 6.86351C4.44677 6.90032 4.55502 6.92846 4.63295 6.92846C7.0144 6.92846 7.66388 3.24805 7.66388 3.24805C7.44739 3.68104 5.93192 3.73516 4.84945 3.95166C3.76697 4.16815 3.33398 5.08825 3.33398 5.52124C3.33398 5.95423 3.71285 6.3331 3.71285 6.3331C4.41646 4.33052 6.58141 4.33052 6.58141 4.33052Z" fill="#F4900C" />
                    </g>
                    <g clip-path="url(#clip2_40_11943)">
                      <path d="M6.58141 4.04146C4.63295 4.47445 4.17831 5.81022 3.728 6.9295L4.13718 7.07239L4.34285 6.57445C4.44677 6.61125 4.55502 6.6394 4.63295 6.6394C7.0144 6.6394 7.66388 2.95898 7.66388 2.95898C7.44739 3.39197 5.93192 3.4461 4.84945 3.66259C3.76697 3.87909 3.33398 4.79919 3.33398 5.23218C3.33398 5.66517 3.71285 6.04404 3.71285 6.04404C4.41646 4.04146 6.58141 4.04146 6.58141 4.04146Z" fill="#FFD983" />
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_40_11943">
                      <rect width="10.3918" height="10.3918" fill="white" transform="translate(0.0136719)" />
                    </clipPath>
                    <clipPath id="clip1_40_11943">
                      <rect width="5.19588" height="5.19588" fill="white" transform="translate(2.90039 2.59766)" />
                    </clipPath>
                    <clipPath id="clip2_40_11943">
                      <rect width="5.19588" height="5.19588" fill="white" transform="translate(2.90039 2.30957)" />
                    </clipPath>
                  </defs>
                </svg>
                +250
              </span>
            </p>
          </div>
          <button type="button" className={`${styles.btn} ${styles.done}`}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.00091 10.8001L3.20091 8.00007L2.26758 8.9334L6.00091 12.6667L14.0009 4.66673L13.0676 3.7334L6.00091 10.8001Z" fill="#D3F491" />
            </svg>
          </button>
        </div>
        <div className={styles.item}>
          <div className={styles.picture}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.4">
                <path d="M8.71301 6.94035C9.11797 6.37453 9.33571 5.69616 9.33571 5.00035C9.33571 4.30454 9.11797 3.62617 8.71301 3.06035C9.0922 2.80204 9.54086 2.66488 9.99967 2.66702C10.6185 2.66702 11.212 2.91285 11.6496 3.35043C12.0872 3.78802 12.333 4.38151 12.333 5.00035C12.333 5.61919 12.0872 6.21268 11.6496 6.65027C11.212 7.08785 10.6185 7.33368 9.99967 7.33368C9.54086 7.33582 9.0922 7.19866 8.71301 6.94035ZM3.66634 5.00035C3.66634 4.53886 3.80319 4.08773 4.05958 3.70402C4.31597 3.3203 4.68039 3.02124 5.10675 2.84463C5.53311 2.66803 6.00226 2.62182 6.45489 2.71185C6.90751 2.80188 7.32327 3.02411 7.64959 3.35043C7.97591 3.67676 8.19814 4.09252 8.28817 4.54514C8.37821 4.99776 8.332 5.46692 8.15539 5.89328C7.97879 6.31964 7.67972 6.68406 7.29601 6.94045C6.91229 7.19684 6.46116 7.33368 5.99967 7.33368C5.38084 7.33368 4.78734 7.08785 4.34976 6.65027C3.91217 6.21268 3.66634 5.61919 3.66634 5.00035ZM4.99967 5.00035C4.99967 5.19813 5.05832 5.39147 5.16821 5.55592C5.27809 5.72037 5.43426 5.84854 5.61699 5.92423C5.79972 5.99992 6.00078 6.01972 6.19477 5.98114C6.38875 5.94255 6.56693 5.84731 6.70678 5.70746C6.84663 5.5676 6.94187 5.38942 6.98046 5.19544C7.01905 5.00146 6.99924 4.80039 6.92355 4.61767C6.84787 4.43494 6.71969 4.27876 6.55524 4.16888C6.3908 4.059 6.19746 4.00035 5.99967 4.00035C5.73446 4.00035 5.4801 4.10571 5.29257 4.29324C5.10503 4.48078 4.99967 4.73513 4.99967 5.00035ZM10.6663 11.3337V12.667H1.33301V11.3337C1.33301 11.3337 1.33301 8.66702 5.99967 8.66702C10.6663 8.66702 10.6663 11.3337 10.6663 11.3337ZM9.33301 11.3337C9.23967 10.8137 8.44634 10.0003 5.99967 10.0003C3.55301 10.0003 2.71301 10.8737 2.66634 11.3337M10.633 8.66702C11.0416 8.98484 11.3757 9.38825 11.6118 9.84893C11.8479 10.3096 11.9803 10.8164 11.9997 11.3337V12.667H14.6663V11.3337C14.6663 11.3337 14.6663 8.91368 10.6263 8.66702H10.633Z" fill="white" />
              </g>
            </svg>
          </div>
          <div className={styles.about}>
            <p className={styles.name}>Пригласи 5 друзей</p>
            <p className={styles.text}>
              Осталось пригласить 1
              <span>
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_40_11943)">
                    <path d="M5.20995 10.3916C7.92013 10.3916 10.1172 8.19455 10.1172 5.48437C10.1172 2.77418 7.92013 0.577148 5.20995 0.577148C2.49977 0.577148 0.302734 2.77418 0.302734 5.48437C0.302734 8.19455 2.49977 10.3916 5.20995 10.3916Z" fill="#F4900C" />
                    <path d="M5.20995 9.81443C7.92013 9.81443 10.1172 7.6174 10.1172 4.90722C10.1172 2.19704 7.92013 0 5.20995 0C2.49977 0 0.302734 2.19704 0.302734 4.90722C0.302734 7.6174 2.49977 9.81443 5.20995 9.81443Z" fill="#FFCC4D" />
                    <path d="M5.20921 9.23677C7.44112 9.23677 9.25044 7.42745 9.25044 5.19553C9.25044 2.96362 7.44112 1.1543 5.20921 1.1543C2.97729 1.1543 1.16797 2.96362 1.16797 5.19553C1.16797 7.42745 2.97729 9.23677 5.20921 9.23677Z" fill="#FFE8B6" />
                    <path d="M5.20921 8.94771C7.44112 8.94771 9.25044 7.13838 9.25044 4.90647C9.25044 2.67456 7.44112 0.865234 5.20921 0.865234C2.97729 0.865234 1.16797 2.67456 1.16797 4.90647C1.16797 7.13838 2.97729 8.94771 5.20921 8.94771Z" fill="#FFAC33" />
                    <g clip-path="url(#clip1_40_11943)">
                      <path d="M6.58141 4.33052C4.63295 4.76351 4.17831 6.09928 3.728 7.21856L4.13718 7.36145L4.34285 6.86351C4.44677 6.90032 4.55502 6.92846 4.63295 6.92846C7.0144 6.92846 7.66388 3.24805 7.66388 3.24805C7.44739 3.68104 5.93192 3.73516 4.84945 3.95166C3.76697 4.16815 3.33398 5.08825 3.33398 5.52124C3.33398 5.95423 3.71285 6.3331 3.71285 6.3331C4.41646 4.33052 6.58141 4.33052 6.58141 4.33052Z" fill="#F4900C" />
                    </g>
                    <g clip-path="url(#clip2_40_11943)">
                      <path d="M6.58141 4.04146C4.63295 4.47445 4.17831 5.81022 3.728 6.9295L4.13718 7.07239L4.34285 6.57445C4.44677 6.61125 4.55502 6.6394 4.63295 6.6394C7.0144 6.6394 7.66388 2.95898 7.66388 2.95898C7.44739 3.39197 5.93192 3.4461 4.84945 3.66259C3.76697 3.87909 3.33398 4.79919 3.33398 5.23218C3.33398 5.66517 3.71285 6.04404 3.71285 6.04404C4.41646 4.04146 6.58141 4.04146 6.58141 4.04146Z" fill="#FFD983" />
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_40_11943">
                      <rect width="10.3918" height="10.3918" fill="white" transform="translate(0.0136719)" />
                    </clipPath>
                    <clipPath id="clip1_40_11943">
                      <rect width="5.19588" height="5.19588" fill="white" transform="translate(2.90039 2.59766)" />
                    </clipPath>
                    <clipPath id="clip2_40_11943">
                      <rect width="5.19588" height="5.19588" fill="white" transform="translate(2.90039 2.30957)" />
                    </clipPath>
                  </defs>
                </svg>
                +250
              </span>
            </p>
          </div>
          <button type="button" className={`${styles.btn}`}>
            <svg width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 3L7 0.113249V5.88675L12 3ZM0 3.5H7.5V2.5H0V3.5Z" fill="white" />
            </svg>
          </button>
        </div>
        <div className={styles.item}>
          <div className={styles.picture}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.4">
                <path d="M8.71301 6.94035C9.11797 6.37453 9.33571 5.69616 9.33571 5.00035C9.33571 4.30454 9.11797 3.62617 8.71301 3.06035C9.0922 2.80204 9.54086 2.66488 9.99967 2.66702C10.6185 2.66702 11.212 2.91285 11.6496 3.35043C12.0872 3.78802 12.333 4.38151 12.333 5.00035C12.333 5.61919 12.0872 6.21268 11.6496 6.65027C11.212 7.08785 10.6185 7.33368 9.99967 7.33368C9.54086 7.33582 9.0922 7.19866 8.71301 6.94035ZM3.66634 5.00035C3.66634 4.53886 3.80319 4.08773 4.05958 3.70402C4.31597 3.3203 4.68039 3.02124 5.10675 2.84463C5.53311 2.66803 6.00226 2.62182 6.45489 2.71185C6.90751 2.80188 7.32327 3.02411 7.64959 3.35043C7.97591 3.67676 8.19814 4.09252 8.28817 4.54514C8.37821 4.99776 8.332 5.46692 8.15539 5.89328C7.97879 6.31964 7.67972 6.68406 7.29601 6.94045C6.91229 7.19684 6.46116 7.33368 5.99967 7.33368C5.38084 7.33368 4.78734 7.08785 4.34976 6.65027C3.91217 6.21268 3.66634 5.61919 3.66634 5.00035ZM4.99967 5.00035C4.99967 5.19813 5.05832 5.39147 5.16821 5.55592C5.27809 5.72037 5.43426 5.84854 5.61699 5.92423C5.79972 5.99992 6.00078 6.01972 6.19477 5.98114C6.38875 5.94255 6.56693 5.84731 6.70678 5.70746C6.84663 5.5676 6.94187 5.38942 6.98046 5.19544C7.01905 5.00146 6.99924 4.80039 6.92355 4.61767C6.84787 4.43494 6.71969 4.27876 6.55524 4.16888C6.3908 4.059 6.19746 4.00035 5.99967 4.00035C5.73446 4.00035 5.4801 4.10571 5.29257 4.29324C5.10503 4.48078 4.99967 4.73513 4.99967 5.00035ZM10.6663 11.3337V12.667H1.33301V11.3337C1.33301 11.3337 1.33301 8.66702 5.99967 8.66702C10.6663 8.66702 10.6663 11.3337 10.6663 11.3337ZM9.33301 11.3337C9.23967 10.8137 8.44634 10.0003 5.99967 10.0003C3.55301 10.0003 2.71301 10.8737 2.66634 11.3337M10.633 8.66702C11.0416 8.98484 11.3757 9.38825 11.6118 9.84893C11.8479 10.3096 11.9803 10.8164 11.9997 11.3337V12.667H14.6663V11.3337C14.6663 11.3337 14.6663 8.91368 10.6263 8.66702H10.633Z" fill="white" />
              </g>
            </svg>
          </div>
          <div className={styles.about}>
            <p className={styles.name}>Пригласи 5 друзей</p>
            <p className={styles.text}>
              Осталось пригласить 1
              <span>
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_40_11943)">
                    <path d="M5.20995 10.3916C7.92013 10.3916 10.1172 8.19455 10.1172 5.48437C10.1172 2.77418 7.92013 0.577148 5.20995 0.577148C2.49977 0.577148 0.302734 2.77418 0.302734 5.48437C0.302734 8.19455 2.49977 10.3916 5.20995 10.3916Z" fill="#F4900C" />
                    <path d="M5.20995 9.81443C7.92013 9.81443 10.1172 7.6174 10.1172 4.90722C10.1172 2.19704 7.92013 0 5.20995 0C2.49977 0 0.302734 2.19704 0.302734 4.90722C0.302734 7.6174 2.49977 9.81443 5.20995 9.81443Z" fill="#FFCC4D" />
                    <path d="M5.20921 9.23677C7.44112 9.23677 9.25044 7.42745 9.25044 5.19553C9.25044 2.96362 7.44112 1.1543 5.20921 1.1543C2.97729 1.1543 1.16797 2.96362 1.16797 5.19553C1.16797 7.42745 2.97729 9.23677 5.20921 9.23677Z" fill="#FFE8B6" />
                    <path d="M5.20921 8.94771C7.44112 8.94771 9.25044 7.13838 9.25044 4.90647C9.25044 2.67456 7.44112 0.865234 5.20921 0.865234C2.97729 0.865234 1.16797 2.67456 1.16797 4.90647C1.16797 7.13838 2.97729 8.94771 5.20921 8.94771Z" fill="#FFAC33" />
                    <g clip-path="url(#clip1_40_11943)">
                      <path d="M6.58141 4.33052C4.63295 4.76351 4.17831 6.09928 3.728 7.21856L4.13718 7.36145L4.34285 6.86351C4.44677 6.90032 4.55502 6.92846 4.63295 6.92846C7.0144 6.92846 7.66388 3.24805 7.66388 3.24805C7.44739 3.68104 5.93192 3.73516 4.84945 3.95166C3.76697 4.16815 3.33398 5.08825 3.33398 5.52124C3.33398 5.95423 3.71285 6.3331 3.71285 6.3331C4.41646 4.33052 6.58141 4.33052 6.58141 4.33052Z" fill="#F4900C" />
                    </g>
                    <g clip-path="url(#clip2_40_11943)">
                      <path d="M6.58141 4.04146C4.63295 4.47445 4.17831 5.81022 3.728 6.9295L4.13718 7.07239L4.34285 6.57445C4.44677 6.61125 4.55502 6.6394 4.63295 6.6394C7.0144 6.6394 7.66388 2.95898 7.66388 2.95898C7.44739 3.39197 5.93192 3.4461 4.84945 3.66259C3.76697 3.87909 3.33398 4.79919 3.33398 5.23218C3.33398 5.66517 3.71285 6.04404 3.71285 6.04404C4.41646 4.04146 6.58141 4.04146 6.58141 4.04146Z" fill="#FFD983" />
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_40_11943">
                      <rect width="10.3918" height="10.3918" fill="white" transform="translate(0.0136719)" />
                    </clipPath>
                    <clipPath id="clip1_40_11943">
                      <rect width="5.19588" height="5.19588" fill="white" transform="translate(2.90039 2.59766)" />
                    </clipPath>
                    <clipPath id="clip2_40_11943">
                      <rect width="5.19588" height="5.19588" fill="white" transform="translate(2.90039 2.30957)" />
                    </clipPath>
                  </defs>
                </svg>
                +250
              </span>
            </p>
          </div>
          <button type="button" className={`${styles.btn} ${styles.done}`}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.00091 10.8001L3.20091 8.00007L2.26758 8.9334L6.00091 12.6667L14.0009 4.66673L13.0676 3.7334L6.00091 10.8001Z" fill="#D3F491" />
            </svg>
          </button>
        </div>
        <div className={styles.item}>
          <div className={styles.picture}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.4">
                <path d="M8.71301 6.94035C9.11797 6.37453 9.33571 5.69616 9.33571 5.00035C9.33571 4.30454 9.11797 3.62617 8.71301 3.06035C9.0922 2.80204 9.54086 2.66488 9.99967 2.66702C10.6185 2.66702 11.212 2.91285 11.6496 3.35043C12.0872 3.78802 12.333 4.38151 12.333 5.00035C12.333 5.61919 12.0872 6.21268 11.6496 6.65027C11.212 7.08785 10.6185 7.33368 9.99967 7.33368C9.54086 7.33582 9.0922 7.19866 8.71301 6.94035ZM3.66634 5.00035C3.66634 4.53886 3.80319 4.08773 4.05958 3.70402C4.31597 3.3203 4.68039 3.02124 5.10675 2.84463C5.53311 2.66803 6.00226 2.62182 6.45489 2.71185C6.90751 2.80188 7.32327 3.02411 7.64959 3.35043C7.97591 3.67676 8.19814 4.09252 8.28817 4.54514C8.37821 4.99776 8.332 5.46692 8.15539 5.89328C7.97879 6.31964 7.67972 6.68406 7.29601 6.94045C6.91229 7.19684 6.46116 7.33368 5.99967 7.33368C5.38084 7.33368 4.78734 7.08785 4.34976 6.65027C3.91217 6.21268 3.66634 5.61919 3.66634 5.00035ZM4.99967 5.00035C4.99967 5.19813 5.05832 5.39147 5.16821 5.55592C5.27809 5.72037 5.43426 5.84854 5.61699 5.92423C5.79972 5.99992 6.00078 6.01972 6.19477 5.98114C6.38875 5.94255 6.56693 5.84731 6.70678 5.70746C6.84663 5.5676 6.94187 5.38942 6.98046 5.19544C7.01905 5.00146 6.99924 4.80039 6.92355 4.61767C6.84787 4.43494 6.71969 4.27876 6.55524 4.16888C6.3908 4.059 6.19746 4.00035 5.99967 4.00035C5.73446 4.00035 5.4801 4.10571 5.29257 4.29324C5.10503 4.48078 4.99967 4.73513 4.99967 5.00035ZM10.6663 11.3337V12.667H1.33301V11.3337C1.33301 11.3337 1.33301 8.66702 5.99967 8.66702C10.6663 8.66702 10.6663 11.3337 10.6663 11.3337ZM9.33301 11.3337C9.23967 10.8137 8.44634 10.0003 5.99967 10.0003C3.55301 10.0003 2.71301 10.8737 2.66634 11.3337M10.633 8.66702C11.0416 8.98484 11.3757 9.38825 11.6118 9.84893C11.8479 10.3096 11.9803 10.8164 11.9997 11.3337V12.667H14.6663V11.3337C14.6663 11.3337 14.6663 8.91368 10.6263 8.66702H10.633Z" fill="white" />
              </g>
            </svg>
          </div>
          <div className={styles.about}>
            <p className={styles.name}>Пригласи 5 друзей</p>
            <p className={styles.text}>
              Осталось пригласить 1
              <span>
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_40_11943)">
                    <path d="M5.20995 10.3916C7.92013 10.3916 10.1172 8.19455 10.1172 5.48437C10.1172 2.77418 7.92013 0.577148 5.20995 0.577148C2.49977 0.577148 0.302734 2.77418 0.302734 5.48437C0.302734 8.19455 2.49977 10.3916 5.20995 10.3916Z" fill="#F4900C" />
                    <path d="M5.20995 9.81443C7.92013 9.81443 10.1172 7.6174 10.1172 4.90722C10.1172 2.19704 7.92013 0 5.20995 0C2.49977 0 0.302734 2.19704 0.302734 4.90722C0.302734 7.6174 2.49977 9.81443 5.20995 9.81443Z" fill="#FFCC4D" />
                    <path d="M5.20921 9.23677C7.44112 9.23677 9.25044 7.42745 9.25044 5.19553C9.25044 2.96362 7.44112 1.1543 5.20921 1.1543C2.97729 1.1543 1.16797 2.96362 1.16797 5.19553C1.16797 7.42745 2.97729 9.23677 5.20921 9.23677Z" fill="#FFE8B6" />
                    <path d="M5.20921 8.94771C7.44112 8.94771 9.25044 7.13838 9.25044 4.90647C9.25044 2.67456 7.44112 0.865234 5.20921 0.865234C2.97729 0.865234 1.16797 2.67456 1.16797 4.90647C1.16797 7.13838 2.97729 8.94771 5.20921 8.94771Z" fill="#FFAC33" />
                    <g clip-path="url(#clip1_40_11943)">
                      <path d="M6.58141 4.33052C4.63295 4.76351 4.17831 6.09928 3.728 7.21856L4.13718 7.36145L4.34285 6.86351C4.44677 6.90032 4.55502 6.92846 4.63295 6.92846C7.0144 6.92846 7.66388 3.24805 7.66388 3.24805C7.44739 3.68104 5.93192 3.73516 4.84945 3.95166C3.76697 4.16815 3.33398 5.08825 3.33398 5.52124C3.33398 5.95423 3.71285 6.3331 3.71285 6.3331C4.41646 4.33052 6.58141 4.33052 6.58141 4.33052Z" fill="#F4900C" />
                    </g>
                    <g clip-path="url(#clip2_40_11943)">
                      <path d="M6.58141 4.04146C4.63295 4.47445 4.17831 5.81022 3.728 6.9295L4.13718 7.07239L4.34285 6.57445C4.44677 6.61125 4.55502 6.6394 4.63295 6.6394C7.0144 6.6394 7.66388 2.95898 7.66388 2.95898C7.44739 3.39197 5.93192 3.4461 4.84945 3.66259C3.76697 3.87909 3.33398 4.79919 3.33398 5.23218C3.33398 5.66517 3.71285 6.04404 3.71285 6.04404C4.41646 4.04146 6.58141 4.04146 6.58141 4.04146Z" fill="#FFD983" />
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_40_11943">
                      <rect width="10.3918" height="10.3918" fill="white" transform="translate(0.0136719)" />
                    </clipPath>
                    <clipPath id="clip1_40_11943">
                      <rect width="5.19588" height="5.19588" fill="white" transform="translate(2.90039 2.59766)" />
                    </clipPath>
                    <clipPath id="clip2_40_11943">
                      <rect width="5.19588" height="5.19588" fill="white" transform="translate(2.90039 2.30957)" />
                    </clipPath>
                  </defs>
                </svg>
                +250
              </span>
            </p>
          </div>
          <button type="button" className={`${styles.btn} ${styles.done}`}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.00091 10.8001L3.20091 8.00007L2.26758 8.9334L6.00091 12.6667L14.0009 4.66673L13.0676 3.7334L6.00091 10.8001Z" fill="#D3F491" />
            </svg>
          </button>
        </div>
      </div>
    </main>
  </>
}

export default Tasks