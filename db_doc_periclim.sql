-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le : sam. 05 mars 2022 à 01:05
-- Version du serveur : 8.0.27
-- Version de PHP : 8.1.2

CREATE DATABASE db_doc_periclim;

USE db_doc_periclim;

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `db_doc_periclim`
--

-- --------------------------------------------------------

--
-- Structure de la table `dp_author`
--

CREATE TABLE `dp_author` (
  `a_id` int NOT NULL,
  `a_first_name` varchar(45) NOT NULL,
  `a_last_name` varchar(45) NOT NULL,
  `a_middle_name` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Déchargement des données de la table `dp_author`
--

INSERT INTO `dp_author` (`a_id`, `a_first_name`, `a_last_name`, `a_middle_name`) VALUES
(1, 'Yang', 'Liwei', ''),
(2, 'Gao', 'Xiaoqing', ''),
(3, 'Hua', 'Jiajia', ''),
(4, 'Wang', 'Liping', ''),
(5, 'Wang', 'Yuhan', ''),
(6, 'Millstein', 'Dev', ''),
(7, 'Mills', 'Andrew', 'D.'),
(8, 'Jeong', 'Seongeun', ''),
(9, 'Ancell', 'Amos', ''),
(10, 'Munoz', 'M.', 'A.'),
(11, 'Pineda', 'S.', ''),
(12, 'Morales', 'J.', 'M.'),
(13, 'Yang', 'Dazhi', ''),
(14, 'Wang', 'Wenting', ''),
(15, 'Hong', 'Tao', ''),
(16, 'Ribeiro', 'Matheus', 'Henrique Dal Molin'),
(17, 'da Silva', 'Ramon', 'Gomes'),
(18, 'Moreno', 'Sinvaldo', 'Rodrigues'),
(19, 'Mariani', 'Viviana', 'Cocco'),
(20, 'dos Santos Coelho', 'Leandro', ''),
(21, 'Visser', 'Lennard', ''),
(22, 'AlSkaif', 'Tarek', ''),
(23, 'van Sark', 'Wilfried', ''),
(24, 'Polleux', 'Louis', ''),
(25, 'Guerassimoff', 'Gilles', ''),
(26, 'Marmorat', 'Jean-Paul', ''),
(27, 'Sandoval-Moreno', 'John', ''),
(28, 'Schuhler', 'Thierry', ''),
(29, 'Kumar', 'Sunil', ''),
(30, 'Singh', 'Bikarma', ''),
(31, 'Singh', 'Ramesh', ''),
(32, 'Khan', 'Muhammad', 'Waseem'),
(33, 'Wang', 'Jie', ''),
(34, 'Yagli', 'Gokhan', 'Mert'),
(35, 'Srinivasan', 'Dipti', '');

-- --------------------------------------------------------

--
-- Structure de la table `dp_book`
--

CREATE TABLE `dp_book` (
  `b_id` int NOT NULL,
  `b_title` varchar(255) NOT NULL,
  `b_publisher_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- --------------------------------------------------------

--
-- Structure de la table `dp_document`
--

CREATE TABLE `dp_document` (
  `d_id` int NOT NULL,
  `d_title` varchar(255) NOT NULL,
  `d_type` varchar(45) NOT NULL,
  `d_year` int DEFAULT NULL,
  `d_abstract` longtext,
  `d_url` varchar(255) DEFAULT NULL,
  `d_doi` varchar(255) DEFAULT NULL,
  `d_standard_number` varchar(255) NOT NULL,
  `d_fk_journal_id` int DEFAULT NULL,
  `d_fk_book_id` int DEFAULT NULL,
  `d_fk_subject_area_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Déchargement des données de la table `dp_document`
--

INSERT INTO `dp_document` (`d_id`, `d_title`, `d_type`, `d_year`, `d_abstract`, `d_url`, `d_doi`, `d_standard_number`, `d_fk_journal_id`, `d_fk_book_id`, `d_fk_subject_area_id`) VALUES
(1, 'Intra-day global horizontal irradiance forecast using FY-4A clear sky index', 'JournalArticle', 2022, 'Accurate forecasting of Global horizontal irradiance (GHI) plays an irreplaceable role in power system expansion, power generation production scheduling, maintenance scheduling and ensuring continuous power supply. A method for GHI forecasting based on FY-4A satellite images is proposed, called FY-4A-Heliosat. This method is derived from the clear sky model (MCclear) and the future clear sky index (CSI), which is obtained by comparing the continuous cloud albedo (CAL) maps derived from AGRI satellite images according to Heliosat-2 method. The forecast horizon is 30�min to 3�h with a 30-min horizon resolution. The combination of climatology and persistence model (CP) is chosen as reference forecasts. Under all sky conditions, the results show that compared with CP model, FY-4A-Heliosat model is better in most cases and seasons. The FY-4A-Heliosat method underestimates the GHI in four seasons for all time horizons. Annual studies indicate that the FY-4A-Heliosat method performs better than the CP method for all forecast horizons; the nRMSE is 17% to 25% for the annual performance. Forecasts with change in cloud conditions show that: the FY-4A-Heliosat method performs better than the CP method in clear, partially cloudy, overcast and clear-to-cloudy conditions. For the cloudy-to-clear set, the FY-4A-Heliosat method needs to be improved future. The results demonstrate that the proposed method is suitable for very short term GHI forecasting.', 'https://www.sciencedirect.com/science/article/pii/S2213138821008304', 'https://doi.org/10.1016/j.seta.2021.101816', 'ISSN: 2213-1388', 1, NULL, 1),
(2, 'The cost of day-ahead solar forecasting errors in the United States', 'JournalArticle', 2022, 'As solar energy contributes an increasing share of total electricity generation, solar forecasting errors become important relative to overall load uncertainty and can add costs to electricity systems. We investigated the costs of day-ahead solar forecast errors across 667 existing solar power plants in the United States (years 2012 through 2019). Our analysis was based on hourly real-time and day-ahead nodal prices. We analyzed two types of solar forecasts: persistence forecasts, a simple approach to forecasting, and a numerical weather prediction forecast, the North American Mesoscale Model (NAM), an improvement over persistence forecasts based on public data and modelling software. We modeled hourly energy forecasts using meteorological forecasts and plant specific characteristics. Hourly plant generation was modeled and debiased with multiple sources of generation records. NAM forecast errors had relatively low costs on average, at no more than 1/MWh in all years except 2016, when costs rose to 1.5/MWh. Even after these error costs, the value of solar was marginally higher when simulating solar participation in day-ahead markets versus participation only in real-time markets. On average, the premium for participating in the day-ahead market, based on NAM forecasts, ranged from ?0.5 to 5.2 /MWh across years. Average error costs were higher in regions with higher solar penetration (i.e., California and New England) compared to regions with low solar penetration. However, California and New England had similar error costs despite higher solar penetration in California, indicating that error costs to date have been only loosely correlated with solar penetration levels.', 'https://www.sciencedirect.com/science/article/pii/S0038092X21010616', 'https://doi.org/10.1016/j.solener.2021.12.012', 'ISSN: 0038-092X', 2, NULL, 10),
(3, 'A bilevel framework for decision-making under uncertainty with contextual information', 'JournalArticle', 2022, 'In this paper, we propose a novel approach for data-driven decision-making under uncertainty in the presence of contextual information. Given a finite collection of observations of the uncertain parameters and potential explanatory variables (i.e., the contextual information), our approach fits a parametric model to those data that is specifically tailored to maximizing the decision value, while accounting for possible feasibility constraints. From a mathematical point of view, our framework translates into a bilevel program, for which we provide both a fast regularization procedure and a big-M-based reformulation that can be solved using off-the-shelf optimization solvers. We showcase the benefits of moving from the traditional scheme for model estimation (based on statistical quality metrics) to decision-guided prediction using three different practical problems. We also compare our approach with existing ones in a realistic case study that considers a strategic power producer that participates in the Iberian electricity market. Finally, we use these numerical simulations to analyze the conditions (in terms of the firm�s cost structure and production capacity) under which our approach proves to be more advantageous to the producer.', 'https://www.sciencedirect.com/science/article/pii/S0305048321001845', 'https://doi.org/10.1016/j.omega.2021.102575', 'ISSN: 0305-0483', 3, NULL, 2),
(4, 'A historical weather forecast dataset from the European Centre for Medium-Range Weather Forecasts (ECMWF) for energy forecasting', 'JournalArticle', 2022, 'Weather is often found to be a key driving factor for power generation and energy consumption. To capture the effects of weather, many energy forecasting practices, such as load forecasting, renewable power generation forecasting, gas and electricity price forecasting, and power distribution systems outage forecasting, would rely on numerical weather prediction (NWP). In the academic literature, however, energy forecasting models have often been developed based on settings of ex post forecasting, where the actual observations of weather variables during the forecasted period are being used. Such gap between academic research and field practices is partly due to the shortage of historical weather forecasts. To that end, an NWP forecast dataset from the European Centre for Medium-Range Weather Forecasts (ECMWF) High Resolution (HRES) model, as available in the ECMWF�s Archive Catalogue, is offered to the energy forecasting community under the Creative Commons Attribution 4.0 International (CC BY 4.0) license. Since the raw data is massive in size, a subset which is thought sufficient for energy forecasting research purposes is provided through this article. Four years (2017�2020) of HRES forecasts of 14 frequently used weather variables, over the geographical region bounded by 63� N, ?126�W, 21� S, and 36� E (most of Europe and North America), on a 0.5�by 0.5�longitude/latitude grid, are released in the form of NetCDF files. This dataset is able to support a variety of aforementioned energy forecasting tasks. In addition to introducing various means to utilize the dataset, this article provides a set of case studies on post-processing of day-ahead solar forecasts. The R code being used to produce the results shown in this article is also made available, so that the readers can reproduce this case study as well as adopt the code for other relevant studies.', 'https://www.sciencedirect.com/science/article/pii/S0038092X21010604', 'https://doi.org/10.1016/j.solener.2021.12.011', 'ISSN: 0038-092X', 2, NULL, 3),
(5, 'Efficient bootstrap stacking ensemble learning model applied to wind power generation forecasting', 'JournalArticle', 2022, 'The use of wind energy plays a vital role in society owing to its economic and environmental importance. Knowing the wind power generation within a specific time window is useful for facilitating decision making in terms of maintenance, electricity market clearing, and reload sharing. However, the effect of climatic and demographic factors on wind power generation sometimes makes time series forecasting a complex task. Thus, this study evaluates an ensemble learning model that combines bagging and stacking methods applied to time series forecasting with very short-term (10 and 30-minutes) and short-term (60 and 120-minutes) evaluations of wind power generation. Arithmetic and weighted average values were used to integrate the samples from bagging strategy. The weights are defined through multi-objective optimization using a non-dominated sorting genetic algorithm � version II, aiming to enhance the forecasting accuracy and stability simultaneously. To demonstrate the wide applicability of the non-linear ensemble learning model, it is extensively tested with measurement data collected from two wind farms in Bahia State, Brazil. The experimental results show that the proposed ensemble learning model achieves a better forecasting performance than single forecasting models, such as stacking, machine learning, artificial neural networks, and statistical models, with values of approximately 7.63%, 7.58%, 20.8%, and 25%, respectively, in terms of the errors for out-of-sample forecasting reduction. In addition, results with a weighted average are 87.5% superior to those with an arithmetic average for out-of-sample wind power forecasting in the evaluated forecasting horizons. The findings show that the integration of ensemble strategies can provide accurate forecasting results in the renewable energy field.', 'https://www.sciencedirect.com/science/article/pii/S0142061521009376', 'https://doi.org/10.1016/j.ijepes.2021.107712', 'ISSN: 0142-0615', 4, NULL, 4),
(6, 'Operational day-ahead solar power forecasting for aggregated PV systems with a varying spatial distribution', 'JournalArticle', 2022, 'Accurate forecasts of the power production of distributed photovoltaic (PV) systems are essential to support grid operation and enable a high PV penetration rate in the electricity grid. In this study, we analyse the performance of 12 different models that forecast the day-ahead power production in agreement with market conditions. These models include regression, support vector regression, ensemble learning, deep learning and physical based techniques. In addition, we examine the effect of aggregating multiple PV systems with a varying inter-system distance on the forecast model performance. The models are evaluated both on their technical and economic performance. From a technical perspective, the results show a positive effect from both an increasing inter-system distance and a larger sized PV fleet on the model performance, which was not the case for the economic assessment. Furthermore, the ensemble and deep learning models perform better than the alternatives from a technical point of view. For the economic assessment, the results indicate the superiority of the physical based model, followed by the deep learning models. Lastly, our findings show the importance of considering the user\'s objective when assessing solar power forecast models.', 'https://www.sciencedirect.com/science/article/pii/S0960148121015688', 'https://doi.org/10.1016/j.renene.2021.10.102', 'ISSN: 0960-1481', 5, NULL, 5),
(7, 'An overview of the challenges of solar power integration in isolated industrial microgrids with reliability constraints', 'JournalArticle', 2022, 'Reducing carbon emissions and electricity costs in industry is a major challenge to ensure competitiveness and compliance with new climate policies. Photovoltaic power offers a promising solution but also brings considerable uncertainties and risks that may endanger the continuity and quality of supply. From an operational point of view, large-scale integration of solar power could result in unmet demand, electrical instabilities and equipment damage. The performance and lifetime of conventional fossil equipment are likely to be altered by repeated transient operations, making it necessary to adopt specific modeling tools. Control strategies and sizing methodologies must be adapted to account for the strong reliability constraint while dealing with significant production uncertainties. In addition, conventional mitigation technologies, such as storage and load flexibility, have limited potential in these applications and may result in high investments or penalties if they are not properly assessed. This study provides an overview of these challenges by providing a transversal analysis of the scientific literature from fossil engine thermodynamics to control system theory applied to industrial systems. The main characteristics of reliability-constrained microgrids are identified and a conceptual definition is proposed by analyzing state-of-the art studies of various industrial applications and taking oil-and gas microgrids as an enlightening example. Then follows a review of the challenges of accounting for dynamical behavior of fossil equipment, PV and storage systems, ending with the identification of several research gaps. Finally, applicable control strategies are presented.', 'https://www.sciencedirect.com/science/article/pii/S136403212101220X', 'https://doi.org/10.1016/j.rser.2021.111955', 'ISSN: 1364-0321', 6, NULL, 6),
(8, 'Catharanthus roseus (L.) G. Don: A review of its ethnobotany, phytochemistry, ethnopharmacology and toxicities', 'JournalArticle', 2022, 'Ethnopharmacological relevance Catharanthus roseus (L.) G. Don is a well known medicinal plant belonging to family Apocynaceae that have been traditionally used as medicine since ancient times. C. roseus is a well-recognized herbal medicine due to its anticancer bisindole alkaloids (vinblastine (111), vincristine (112) and vindesine (121)). In the Ayurvedic system of medicine, different parts of C. roseus are used in folklore herbal medicine for treatment of many types of cancer, diabetes, stomach disorders, kidney, liver and cardiovascular diseases. Aim of the study The main idea behind this communication is to update comprehensively and analyze critically the traditional applications, phytochemistry, pharmacological activities, and toxicity of various extracts and isolated compounds from C. roseus. Materials and methods The presented data covers scientific works on C. roseus published across the world between 1967 and 2021 was searched from various international publishing houses using search engines as well as several traditional texts like Ayurveda and relevant books. Collected data from different sources was comprehensively summarized/analyzed for ethnomedicinal uses, phytochemistry, analytical chemistry, biological activities and toxicity studies of C. roseus. Results and discussion C. roseus has a wide range of applications in the traditional system of medicine especially in cancer and diabetes. During phytochemical investigation, total of 344 compounds including monoterpene indole alkaloids (MIAs) (110), bisindole alkaloids (35), flavonoids (34), phenolic acids (9) and volatile constituents (156) have been reported in the various extracts and fractions of different plant parts of C. roseus. The extracts and isolated compounds of C. roseus have to exhibit many pharmacological activities such as anticancer/cytotoxic, antidiabetic, antimicrobial, antioxidant, larvicidal and pupicidal. The comparative toxicity of extracts and bioactive compounds investigated in dose dependent manner. The investigation of toxicity showed that the both extracts and isolated compounds are safe to a certain limit beyond that they cause adverse effects. Conclusion This review is a comprehensive, critically analyzed summarization of sufficient baseline information of selected topics in one place undertaken till date on C. roseus for future works and drug discovery. The phytochemical investigation including biosynthetic pathways showed that the MIAs and bisindole alkaloids are major and characteristic class of compounds in this plant. The present data confirm that the extracts/fractions and their isolated alkaloids especially vinblastine (111) and vincristine (112) have a potent anticancer/cytotoxic and antidiabetic property and there is a need for further study with particular attention to the mechanisms of anticancer activity. In biosynthesis pathways of alkaloids especially bisindole alkaloids, some enzymes and rearrangement are unexposed therefore it is required to draw special attention. It also focuses on attracting the attention of scientific communities about the widespread biological activities of this species for its better utilization prospects in the near future.', 'https://www.sciencedirect.com/science/article/pii/S037887412100876X', 'https://doi.org/10.1016/j.jep.2021.114647', 'ISSN: 0378-8741', 7, NULL, 7),
(9, 'Multi-agents based optimal energy scheduling technique for electric vehicles aggregator in microgrids', 'JournalArticle', 2022, 'This paper presents multi-agents based optimal energy scheduling technique at microgrid level, aiming to minimize overall costs allied with the domestic energy consumption and electric vehicles charging during the particular market price and battery degradation costs. Firstly, agents-based optimal technique is presented for the distributed resource management, where local agents operate and accomplish their tasks autonomously that making the microgrid system more intelligent and reliable. Secondly, to model the actual grid voltage and price uncertainties, the proposed technique is applied in a low distribution network considering the upper and lower limits of the grid prices instead of the average/estimated prices. The problem is solved by linear programming considering the generation capabilities of the renewable energy resources and electric vehicle state of charge during the day-ahead period of 24�h. Besides, to deal with the domestic load and electric vehicles state of charge uncertainties, the simulation is carried out based on their energy consumption periods during the day while the electric vehicles initial state of charges is estimated on their daily mileage. For validation, the proposed technique is employed at a low voltage residential area and compared, which shows that the proposed technique total profit raised by 16.92% and 5.60% in comparison with the uncoordinated and stochastic techniques respectively, and guarantee the optimal energy scheduling that satisfies the consumers load demands efficiently.', 'https://www.sciencedirect.com/science/article/pii/S0142061521005858', 'https://doi.org/10.1016/j.ijepes.2021.107346', 'ISSN: 0142-0615', 4, NULL, 8),
(10, 'Sub-minute probabilistic solar forecasting for real-time stochastic simulations', 'JournalArticle', 2022, 'Simulation needs to reflect reality, otherwise, it yields misleading results that are potentially harmful to the operators and decision makers who rely on that simulation. Current stochastic simulation methods for solar energy systems in smart grids mostly consider scenarios generated from a single low-frequency time series, which is unable to reflect the high-frequency fluctuation and changing uncertainty in the actual solar power output. To that end, this paper introduces a state-of-the-art probabilistic solar forecasting method, that provides remedies to the drawbacks, and thus benefits real-time stochastic simulations at large. Lasso-penalized quantile regression is paired with an analog-based preselection algorithm, and is used to forecast the irradiance over a 1�km by 1�km area, in sub-minute timescales. To capture the changing weather condition, the forecasting method uses online training, and updates its parameters and forecasts every few seconds. Despite the heavy computation required, the forecasting method is fast; it takes less than 1�s to complete a forecasting cycle. Through five benchmarking methods, ranging from the na�ve climatology and persistence to the state-of-the-art analog ensemble (AnEn), the proposed method is shown to be able to attain an exceptionally high forecast skill in terms of pinball loss (up to a skill score of 55%, with AnEn being the reference model), which is unparalleled by all previous works that used the same dataset. To promote the future uptake of the method, the R code and the final forecast datasets are released on Github.', 'https://www.sciencedirect.com/science/article/pii/S1364032121010078', 'https://doi.org/10.1016/j.rser.2021.111736', 'ISSN: 1364-0321', 6, NULL, 9);

-- --------------------------------------------------------

--
-- Structure de la table `dp_document_has_dp_author`
--

CREATE TABLE `dp_document_has_dp_author` (
  `dha_fk_document_id` int NOT NULL,
  `dha_fk_author_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Déchargement des données de la table `dp_document_has_dp_author`
--

INSERT INTO `dp_document_has_dp_author` (`dha_fk_document_id`, `dha_fk_author_id`) VALUES
(1, 1),
(1, 2),
(1, 3),
(1, 4),
(2, 5),
(2, 6),
(2, 7),
(2, 8),
(2, 9),
(3, 10),
(3, 11),
(3, 12),
(4, 13),
(10, 13),
(4, 14),
(4, 15),
(5, 16),
(5, 17),
(5, 18),
(5, 19),
(5, 20),
(6, 21),
(6, 22),
(6, 23),
(7, 24),
(7, 25),
(7, 26),
(7, 27),
(7, 28),
(8, 29),
(8, 30),
(8, 31),
(9, 32),
(9, 33),
(10, 34),
(10, 35);

-- --------------------------------------------------------

--
-- Structure de la table `dp_document_has_dp_key_word`
--

CREATE TABLE `dp_document_has_dp_key_word` (
  `dhkw_fk_document_id` int NOT NULL,
  `dhkw_fk_key_word_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- --------------------------------------------------------

--
-- Structure de la table `dp_journal`
--

CREATE TABLE `dp_journal` (
  `j_id` int NOT NULL,
  `j_name` mediumtext CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Déchargement des données de la table `dp_journal`
--

INSERT INTO `dp_journal` (`j_id`, `j_name`) VALUES
(1, 'Sustainable Energy Technologies and Assessments'),
(2, 'Solar Energy'),
(3, 'Omega'),
(4, 'International Journal of Electrical Power & Energy Systems'),
(5, 'Renewable Energy'),
(6, 'Renewable and Sustainable Energy Reviews'),
(7, 'Journal of Ethnopharmacology');

-- --------------------------------------------------------

--
-- Structure de la table `dp_key_word`
--

CREATE TABLE `dp_key_word` (
  `kw_id` int NOT NULL,
  `kw_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- --------------------------------------------------------

--
-- Structure de la table `dp_subject_area`
--

CREATE TABLE `dp_subject_area` (
  `sa_id` int NOT NULL,
  `sa_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Déchargement des données de la table `dp_subject_area`
--

INSERT INTO `dp_subject_area` (`sa_id`, `sa_name`) VALUES
(1, 'Global solar irradiance'),
(2, 'Data-driven decision-making under uncertainty'),
(3, 'Numerical weather prediction'),
(4, 'Wind power generation'),
(5, 'Solar forecast'),
(6, 'Microgrids'),
(7, 'Madagascar periwinkle Or periwinkle plant'),
(8, 'Electric vehicle aggregator'),
(9, 'Solar forecasting'),
(10, 'solar forecasting');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `dp_author`
--
ALTER TABLE `dp_author`
  ADD PRIMARY KEY (`a_id`);

--
-- Index pour la table `dp_book`
--
ALTER TABLE `dp_book`
  ADD PRIMARY KEY (`b_id`);

--
-- Index pour la table `dp_document`
--
ALTER TABLE `dp_document`
  ADD PRIMARY KEY (`d_id`),
  ADD KEY `d_fk_journal_id` (`d_fk_journal_id`),
  ADD KEY `d_fk_book_id` (`d_fk_book_id`),
  ADD KEY `d_fk_subject_area_id` (`d_fk_subject_area_id`);

--
-- Index pour la table `dp_document_has_dp_author`
--
ALTER TABLE `dp_document_has_dp_author`
  ADD PRIMARY KEY (`dha_fk_document_id`,`dha_fk_author_id`),
  ADD KEY `dha_fk_author_id` (`dha_fk_author_id`),
  ADD KEY `dha_fk_document_id` (`dha_fk_document_id`);

--
-- Index pour la table `dp_document_has_dp_key_word`
--
ALTER TABLE `dp_document_has_dp_key_word`
  ADD PRIMARY KEY (`dhkw_fk_document_id`,`dhkw_fk_key_word_id`),
  ADD KEY `dhkw_fk_key_word_id` (`dhkw_fk_key_word_id`),
  ADD KEY `dhkw_fk_document_id` (`dhkw_fk_document_id`);

--
-- Index pour la table `dp_journal`
--
ALTER TABLE `dp_journal`
  ADD PRIMARY KEY (`j_id`);

--
-- Index pour la table `dp_key_word`
--
ALTER TABLE `dp_key_word`
  ADD PRIMARY KEY (`kw_id`);

--
-- Index pour la table `dp_subject_area`
--
ALTER TABLE `dp_subject_area`
  ADD PRIMARY KEY (`sa_id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `dp_author`
--
ALTER TABLE `dp_author`
  MODIFY `a_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT pour la table `dp_book`
--
ALTER TABLE `dp_book`
  MODIFY `b_id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `dp_document`
--
ALTER TABLE `dp_document`
  MODIFY `d_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT pour la table `dp_journal`
--
ALTER TABLE `dp_journal`
  MODIFY `j_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT pour la table `dp_key_word`
--
ALTER TABLE `dp_key_word`
  MODIFY `kw_id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `dp_subject_area`
--
ALTER TABLE `dp_subject_area`
  MODIFY `sa_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `dp_document`
--
ALTER TABLE `dp_document`
  ADD CONSTRAINT `d_fk_book_id` FOREIGN KEY (`d_fk_book_id`) REFERENCES `dp_book` (`b_id`),
  ADD CONSTRAINT `d_fk_journal_id` FOREIGN KEY (`d_fk_journal_id`) REFERENCES `dp_journal` (`j_id`),
  ADD CONSTRAINT `d_fk_subject_area_id` FOREIGN KEY (`d_fk_subject_area_id`) REFERENCES `dp_subject_area` (`sa_id`);

--
-- Contraintes pour la table `dp_document_has_dp_author`
--
ALTER TABLE `dp_document_has_dp_author`
  ADD CONSTRAINT `dha_fk_author_id` FOREIGN KEY (`dha_fk_author_id`) REFERENCES `dp_author` (`a_id`),
  ADD CONSTRAINT `dha_fk_document_id` FOREIGN KEY (`dha_fk_document_id`) REFERENCES `dp_document` (`d_id`);

--
-- Contraintes pour la table `dp_document_has_dp_key_word`
--
ALTER TABLE `dp_document_has_dp_key_word`
  ADD CONSTRAINT `dhkw_fk_document_id` FOREIGN KEY (`dhkw_fk_document_id`) REFERENCES `dp_document` (`d_id`),
  ADD CONSTRAINT `dhkw_fk_key_word_id` FOREIGN KEY (`dhkw_fk_key_word_id`) REFERENCES `dp_key_word` (`kw_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
