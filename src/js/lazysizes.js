import lazySizes from 'lazysizes';

lazySizes.cfg.customMedia = {
  '--small': '(max-width: 576px)',
  '--medium': '(max-width: 768px)',
  '--large': '(max-width: 1030px)',
  '--xlarge': '(max-width: 1920px)',
};
lazySizes.cfg.expand = 200;
lazySizes.cfg.loadMode = 1;

lazySizes.init();