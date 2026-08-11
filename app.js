const $ = (selector) => document.querySelector(selector);

Promise.all([fetch('data/schools.json').then(r => r.json()), fetch('data/policies.json').then(r => r.json())])
  .then(([schools, policies]) => {
    const options = (key, target) => [...new Set(schools.map(s => s[key]))].sort().forEach(value => target.add(new Option(value, value)));
    options('district', $('#district')); options('stage', $('#stage')); options('type', $('#type'));
    const render = () => {
      const filtered = schools.filter(s => ['district','stage','type'].every(key => !$('#' + key).value || s[key] === $('#' + key).value));
      $('#school-count').textContent = `共 ${filtered.length} 所`;
      $('#map').innerHTML = '<span class="map-note">示意点位；以学校公开地址为准</span>' + filtered.map(s => `<i class="dot" title="${s.name}" style="left:${s.x}%;top:${s.y}%"></i>`).join('');
      $('#schools').innerHTML = filtered.map(s => `<article class="card"><h3>${s.name}</h3><div class="meta">${s.district} · ${s.address}</div><span class="tag">${s.stage}</span><span class="tag">${s.type}</span>${s.website ? `<div><a href="${s.website}" target="_blank" rel="noreferrer">学校官网 ↗</a></div>` : ''}</article>`).join('') || '<p>没有符合条件的学校。</p>';
    };
    ['district','stage','type'].forEach(id => $('#' + id).addEventListener('change', render)); render();
    $('#policies').innerHTML = policies.map(p => `<article><strong>${p.year} · ${p.district}</strong><br><a href="${p.source}" target="_blank" rel="noreferrer">${p.title} ↗</a><div class="meta">${p.stage} · ${p.date}</div></article>`).join('');
  }).catch(() => { document.body.insertAdjacentHTML('beforeend', '<p>数据加载失败，请检查 data 目录。</p>'); });
