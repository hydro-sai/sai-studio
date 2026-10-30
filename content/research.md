## Coupled hydrology–landslide modelling

Rainfall-triggered landslides are rarely a purely geotechnical problem: the water that destabilises a slope has to travel through a catchment first. I work on models that simulate both sides of that chain — the hydrological routing that decides *where* and *when* water arrives, and the slope-stability response that decides whether the hillslope fails.

## iHydroSlide

**iHydroSlide** is an open-source, physically based model that couples a distributed hydrological model with a landslide susceptibility / runout module.

- **Hydrology:** gridded rainfall–runoff routing on a coarse mesh (~1 km)
- **Landslide:** infinite-slope stability evaluated on a finer mesh (~100–270 m)
- **Implementation:** originally developed in Fortran and currently being migrated to Python (NumPy + Numba) to facilitate extension and deployment. The resolution of the hydrological and landslide modules can be adjusted by users according to their needs
- **Vision:** To build an open-source, efficient, and novice-friendly hydrological–landslide coupled model that helps reduce disaster-related losses and casualties.

Current work focuses on a national-scale configuration for China (3226 × 5589 grid), with regional validation cases in the Qaidam Basin, Qinghai Province, and the middle and upper reaches of the Hanjiang River Basin in Shaanxi Province.

## Rainfall thresholds and early warning

A parallel thread is turning model output into something operationally useful: how much rain, over how long, in which antecedent wetness state, actually leads to failure. This means comparing simulated stability with observed landslide inventories and gridded precipitation products.

## Scientific software

I care about the unglamorous parts: reproducible input pipelines, honest error messages, and tools that a hydrologist can run without reading the source. If a model cannot be re-run by someone else, it is not really a result.

---

*Want to collaborate or spot a bug? The fastest way is [GitHub](https://github.com/hydro-sai) or [email](saisai.yin@foxmail.com).*
