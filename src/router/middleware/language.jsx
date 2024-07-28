export function LanguageMiddleware({ children }) {
  const { lang } = useParams();
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const loc = useLocation();

  useEffect(() => {
    const changeLanguage = async () => {
      if (lang) {
        if (i18n.language !== lang && i18n.options.fallbackLng.includes(lang)) {
          await i18n.changeLanguage(lang);
        } else {
          navigate(loc.pathname.replace(`/${lang}`, `/${i18n.language}`));
        }
      } else navigate("/" + i18n.language + loc.pathname, { replace: true });
    };
    changeLanguage();
  }, [lang]);

  return children || <Outlet />;
}

LanguageMiddleware.propTypes = {
  children: PropTypes.any,
};
