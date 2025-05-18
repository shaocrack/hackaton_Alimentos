import React, { useEffect, useState } from 'react';
import Layout from '../../layout/Layout';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
  LineChart,
  Line
} from 'recharts';
import { 
  PeopleAlt, 
  Restaurant, 
  Favorite,
  EmojiEvents
} from '@mui/icons-material';
import './Dashboard.css';
import { useNavigate } from 'react-router-dom';

// Tipos explícitos para los datos
interface Stat {
  icon: React.ReactNode;
  value: string;
  label: string;
  sub: string;
}
interface DonacionMes { mes: string; cantidad: number; }
interface Distribucion { name: string; value: number; }

type Year = '2023' | '2024' | '2025';

const statsDataByYear: Record<Year, Stat[]> = {
  '2023': [
    { icon: <PeopleAlt fontSize="large" />, value: '120', label: 'Organizaciones Atendidas', sub: '2023' },
    { icon: <EmojiEvents fontSize="large" />, value: '32,000,000', label: 'Platos Entregados', sub: '2003–2023' },
    { icon: <Favorite fontSize="large" />, value: '75,000/mes', label: 'Personas Beneficiadas', sub: '' },
  ],
  '2024': [
    { icon: <PeopleAlt fontSize="large" />, value: '149', label: 'Organizaciones Atendidas', sub: '2024' },
    { icon: <EmojiEvents fontSize="large" />, value: '38,167,550', label: 'Platos Entregados', sub: '2003–2024' },
    { icon: <Favorite fontSize="large" />, value: '82,973/mes', label: 'Personas Beneficiadas', sub: '' },
  ],
  '2025': [
    { icon: <PeopleAlt fontSize="large" />, value: '160', label: 'Organizaciones Atendidas', sub: '2025' },
    { icon: <EmojiEvents fontSize="large" />, value: '45,000,000', label: 'Platos Entregados', sub: '2003–2025' },
    { icon: <Favorite fontSize="large" />, value: '90,000/mes', label: 'Personas Beneficiadas', sub: '' },
  ],
};

const donacionesPorMesByYear: Record<Year, DonacionMes[]> = {
  '2023': [
    { mes: 'Ene', cantidad: 3200 },
    { mes: 'Feb', cantidad: 3100 },
    { mes: 'Mar', cantidad: 2500 },
    { mes: 'Abr', cantidad: 2780 },
    { mes: 'May', cantidad: 1890 },
    { mes: 'Jun', cantidad: 2390 },
  ],
  '2024': [
    { mes: 'Ene', cantidad: 4000 },
    { mes: 'Feb', cantidad: 3000 },
    { mes: 'Mar', cantidad: 2000 },
    { mes: 'Abr', cantidad: 2780 },
    { mes: 'May', cantidad: 1890 },
    { mes: 'Jun', cantidad: 2390 },
  ],
  '2025': [
    { mes: 'Ene', cantidad: 4200 },
    { mes: 'Feb', cantidad: 3500 },
    { mes: 'Mar', cantidad: 2700 },
    { mes: 'Abr', cantidad: 3000 },
    { mes: 'May', cantidad: 2100 },
    { mes: 'Jun', cantidad: 2600 },
  ],
};

const distribucionAlimentosByYear: Record<Year, Distribucion[]> = {
  '2023': [
    { name: 'Frutas', value: 30 },
    { name: 'Verduras', value: 30 },
    { name: 'Granos', value: 20 },
    { name: 'Lácteos', value: 15 },
    { name: 'Otros', value: 5 },
  ],
  '2024': [
    { name: 'Frutas', value: 35 },
    { name: 'Verduras', value: 25 },
    { name: 'Granos', value: 20 },
    { name: 'Lácteos', value: 15 },
    { name: 'Otros', value: 5 },
  ],
  '2025': [
    { name: 'Frutas', value: 40 },
    { name: 'Verduras', value: 20 },
    { name: 'Granos', value: 20 },
    { name: 'Lácteos', value: 15 },
    { name: 'Otros', value: 5 },
  ],
};

const COLORS = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEEAD'];

const Dashboard: React.FC = () => {
  const [filtroAnio, setFiltroAnio] = useState<Year>('2024');
  const [showPlusOne, setShowPlusOne] = useState(false);
  const [donadores, setDonadores] = useState(500);
  const [animDonadores, setAnimDonadores] = useState(false);

  const statsData = statsDataByYear[filtroAnio];
  const donacionesPorMes = donacionesPorMesByYear[filtroAnio];
  const distribucionAlimentos = distribucionAlimentosByYear[filtroAnio];

  const handleFiltroAnio = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFiltroAnio(e.target.value as Year);
  };

  const navigate = useNavigate();

  const handleDonar = () => {
    setShowPlusOne(true);
    setAnimDonadores(true);
    setTimeout(() => {
      setShowPlusOne(false);
      setDonadores((prev) => prev + 1);
      setTimeout(() => setAnimDonadores(false), 800);
      navigate('/donate');
    }, 1200);
  };

  return (
    <Layout>
      <div className="dashboard-bg">
        <div className="dashboard-container dashboard-overlay dashboard-bottom-space">
          {/* Contador de donadores en esquina */}
          <div className={`donadores-counter${animDonadores ? ' anim' : ''}`} style={{ top: 80, right: 32 }}>
            <span className="donadores-label">Donadores</span>
            <span className="donadores-num">{donadores}</span>
          </div>

          {/* Estadísticas principales en horizontal */}
          <div className="stats-main horizontal">
            {statsData.map((stat: Stat, idx: number) => (
              <div className="stat-card glass" key={idx}>
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
                {stat.sub && <div className="stat-sub">{stat.sub}</div>}
              </div>
            ))}
          </div>

          {/* Filtros mejorados */}
          <div className="dashboard-filters fancy">
            <label htmlFor="anio">Año:</label>
            <select id="anio" value={filtroAnio} onChange={handleFiltroAnio}>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
            </select>
          </div>

          {/* Gráficos */}
          <div className="charts-grid">
            <div className="chart-card">
              <h3>Donaciones por Mes</h3>
              <div className="chart-container">
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart data={donacionesPorMes}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="mes" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="cantidad" fill="#FF6B6B" animationDuration={2000}>
                      {donacionesPorMes.map((entry: DonacionMes, index: number) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="chart-card">
              <h3>Distribución de Alimentos</h3>
              <div className="chart-container">
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart>
                    <Pie
                      data={distribucionAlimentos}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      animationDuration={2000}
                    >
                      {distribucionAlimentos.map((entry: Distribucion, index: number) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="chart-card full-width">
              <h3>Tendencia de Platos Entregados</h3>
              <div className="chart-container">
                <ResponsiveContainer width="100%" height={250}>
                  <LineChart data={donacionesPorMes}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="mes" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="cantidad" stroke="#eb8022" strokeWidth={3} dot={{ r: 5 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Frase y botón DONAR */}
          <div className="donar-section">
            <div className="donar-frase">SÚMATE A ESTE CAMBIO</div>
            <button className="donar-btn" onClick={handleDonar}>DONAR</button>
          </div>

          {/* Animación +1 */}
          {showPlusOne && (
            <div className="plus-one-overlay">
              <span className="plus-one">+1</span>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard; 